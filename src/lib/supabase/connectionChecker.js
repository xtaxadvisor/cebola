import { supabase } from './client';
export async function checkSupabaseConnection() {
    try {
        // Test with a simple query that doesn't require special functions
        const { data, error } = await supabase
            .from('public_data')
            .select('count')
            .limit(1)
            .single();
        if (error) {
            console.error('Database connection test failed:', error);
            return false;
        }
        return true;
    }
    catch (error) {
        console.error('Database connection test failed:', error);
        return false;
    }
}
export async function validateSupabaseConfig() {
    const requiredEnvVars = [
        'VITE_SUPABASE_URL',
        'VITE_SUPABASE_ANON_KEY'
    ];
    const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
    if (missingVars.length > 0) {
        console.error('Missing Supabase environment variables:', missingVars);
        return false;
    }
    // Validate URL format and protocol
    try {
        const url = new URL(import.meta.env.VITE_SUPABASE_URL);
        if (url.protocol !== 'https:') {
            console.warn('Warning: Supabase URL should use HTTPS protocol');
        }
    }
    catch {
        console.error('Invalid Supabase URL format');
        return false;
    }
    return true;
}
