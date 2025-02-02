import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase/config';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { useNotificationStore } from '../lib/store';
const AuthContext = createContext(undefined);
export function AuthProvider({ children }) {
    const { user, loading } = useSupabaseAuth();
    const navigate = useNavigate();
    const { addNotification } = useNotificationStore();
    const login = async (email, password) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: email.toLowerCase().trim(),
                password
            });
            if (error) {
                if (error.message === 'Invalid login credentials') {
                    throw new Error('Invalid email or password');
                }
                throw error;
            }
            addNotification('Successfully logged in', 'success');
            navigate('/dashboard');
        }
        catch (error) {
            console.error('Login error:', error);
            addNotification(error instanceof Error ? error.message : 'Failed to log in', 'error');
            throw error;
        }
    };
    const register = async (email, password, userData) => {
        try {
            const { error } = await supabase.auth.signUp({
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
            addNotification('Successfully registered. Please check your email.', 'success');
            navigate('/login');
        }
        catch (error) {
            console.error('Registration error:', error);
            addNotification(error instanceof Error ? error.message : 'Failed to register', 'error');
            throw error;
        }
    };
    const logout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error)
                throw error;
            addNotification('Successfully logged out', 'success');
            navigate('/');
        }
        catch (error) {
            console.error('Logout error:', error);
            addNotification(error instanceof Error ? error.message : 'Failed to log out', 'error');
            throw error;
        }
    };
    const value = {
        user,
        loading,
        isAuthenticated: !!user,
        login,
        register,
        logout
    };
    return (_jsx(AuthContext.Provider, { value: value, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
