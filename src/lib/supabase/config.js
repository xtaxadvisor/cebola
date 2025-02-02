import { createClient } from '@supabase/supabase-js';
import { useNotificationStore } from '../store';
// Validate environment variables
function validateConfig() {
    const missing = [];
    if (!import.meta.env.VITE_SUPABASE_URL)
        missing.push('VITE_SUPABASE_URL');
    if (!import.meta.env.VITE_SUPABASE_ANON_KEY)
        missing.push('VITE_SUPABASE_ANON_KEY');
    if (missing.length > 0) {
        console.error('Missing Supabase environment variables:', missing);
        return false;
    }
    try {
        const url = new URL(import.meta.env.VITE_SUPABASE_URL);
        if (url.protocol !== 'https:') {
            console.warn('Supabase URL should use HTTPS protocol');
        }
        return true;
    }
    catch {
        console.error('Invalid Supabase URL format');
        return false;
    }
}
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!validateConfig()) {
    useNotificationStore.getState().addNotification('Database configuration error. Please check environment variables.', 'error');
    throw new Error('Missing Supabase environment variables. Please check your .env file.');
}
// Determine if we're in WebContainer environment
const isWebContainer = window.location.hostname.includes('webcontainer');
// Create Supabase client with realtime completely disabled in WebContainer
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        storage: localStorage,
        storageKey: 'supabase.auth.token'
    },
    // Completely disable realtime features in WebContainer
    realtime: isWebContainer ? false : {
        eventsPerSecond: 1,
        maxReconnectionAttempts: 0,
        retryAfterMs: 0
    }
});
// Handle auth state changes
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
        localStorage.removeItem('supabase.auth.token');
    }
});
// Export connection status checker
export function isWebSocketConnected() {
    return false; // Always return false in WebContainer
}
// Remove realtime channel export
export const protaxChannel = null;
