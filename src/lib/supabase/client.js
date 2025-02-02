import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// Determine if we're in WebContainer environment
const isWebContainer = window.location.hostname.includes('webcontainer');
// Create Supabase client with realtime completely disabled in WebContainer
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    },
    // Completely disable realtime features in WebContainer
    realtime: isWebContainer ? false : {
        eventsPerSecond: 1,
        maxReconnectionAttempts: 0,
        retryAfterMs: 0
    }
});
// Remove realtime channel export and WebSocket functionality
