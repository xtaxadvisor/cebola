import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase/config';
import { useNotificationStore } from '../lib/store';
import { handleAuthError, isAuthError } from '../services/auth/errorHandler';
const SupabaseContext = createContext(undefined);
export function SupabaseProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { addNotification } = useNotificationStore();
    const fetchUserProfile = async (authId) => {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('auth_id', authId)
                .single();
            if (error)
                throw error;
            setUser(data);
        }
        catch (error) {
            console.error('Error fetching user profile:', error);
            setUser(null);
            // Force re-login if profile fetch fails
            await supabase.auth.signOut();
            navigate('/login');
        }
    };
    useEffect(() => {
        let mounted = true;
        // Check current auth status
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user && mounted) {
                fetchUserProfile(session.user.id);
            }
            if (mounted)
                setLoading(false);
        });
        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (mounted) {
                if (session?.user) {
                    await fetchUserProfile(session.user.id);
                }
                else {
                    setUser(null);
                }
            }
        });
        return () => {
            mounted = false;
            subscription.unsubscribe();
        };
    }, [navigate]);
    const signIn = async (email, password) => {
        try {
            const { data: { user: authUser }, error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase().trim(),
                password
            });
            if (error)
                throw error;
            if (authUser) {
                await fetchUserProfile(authUser.id);
                addNotification('Successfully signed in', 'success');
            }
        }
        catch (error) {
            if (isAuthError(error)) {
                handleAuthError(error);
            }
            throw error;
        }
    };
    const signUp = async (email, password, userData) => {
        try {
            const { data: { user: authUser }, error } = await supabase.auth.signUp({
                email: email.toLowerCase().trim(),
                password,
                options: {
                    data: {
                        name: userData.name.trim(),
                        role: userData.role
                    }
                }
            });
            if (error)
                throw error;
            if (authUser) {
                // Create user profile
                const { error: profileError } = await supabase
                    .from('users')
                    .insert({
                    auth_id: authUser.id,
                    name: userData.name.trim(),
                    email: authUser.email,
                    role: userData.role
                });
                if (profileError)
                    throw profileError;
                addNotification('Account created successfully. Please check your email to verify your account.', 'success');
            }
        }
        catch (error) {
            if (isAuthError(error)) {
                handleAuthError(error);
            }
            throw error;
        }
    };
    const signOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error)
                throw error;
            setUser(null);
            addNotification('Successfully signed out', 'success');
            navigate('/');
        }
        catch (error) {
            if (isAuthError(error)) {
                handleAuthError(error);
            }
            throw error;
        }
    };
    const value = {
        user,
        loading,
        signIn,
        signUp,
        signOut
    };
    return (_jsx(SupabaseContext.Provider, { value: value, children: children }));
}
export function useSupabase() {
    const context = useContext(SupabaseContext);
    if (context === undefined) {
        throw new Error('useSupabase must be used within a SupabaseProvider');
    }
    return context;
}
