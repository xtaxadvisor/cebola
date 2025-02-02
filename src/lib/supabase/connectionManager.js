import { supabase } from './client';
import { useNotificationStore } from '../store';
class SupabaseConnectionManager {
    static instance;
    isConnected = false;
    retryCount = 0;
    MAX_RETRIES = 3;
    RETRY_DELAY = 1000;
    constructor() {
        this.setupConnectionMonitoring();
    }
    static getInstance() {
        if (!SupabaseConnectionManager.instance) {
            SupabaseConnectionManager.instance = new SupabaseConnectionManager();
        }
        return SupabaseConnectionManager.instance;
    }
    setupConnectionMonitoring() {
        setInterval(async () => {
            await this.checkConnection();
        }, 30000); // Check every 30 seconds
    }
    async checkConnection() {
        try {
            const { data, error } = await supabase
                .from('users')
                .select('count')
                .limit(1)
                .single();
            this.isConnected = !error;
            if (error)
                throw error;
            return true;
        }
        catch (error) {
            console.error('Supabase connection error:', error);
            this.isConnected = false;
            useNotificationStore.getState().addNotification('Database connection error. Retrying...', 'error');
            if (this.retryCount < this.MAX_RETRIES) {
                this.retryCount++;
                setTimeout(() => this.checkConnection(), this.RETRY_DELAY * this.retryCount);
            }
            return false;
        }
    }
    getConnectionStatus() {
        return this.isConnected;
    }
    resetRetryCount() {
        this.retryCount = 0;
    }
}
export const supabaseConnectionManager = SupabaseConnectionManager.getInstance();
