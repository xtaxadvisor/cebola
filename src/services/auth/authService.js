import { supabase } from '../../lib/supabase/config';
import { useNotificationStore } from '../../lib/store';
import { SECURITY_CONFIG } from '../../lib/security/config';
import { rateLimiter } from '../../lib/security/rateLimit';
import { auditLogger } from '../../lib/security/audit';
import { sanitizeInput } from '../../lib/security/validation';
import { checkMasterLogin } from './fallbackAuth';
export class AuthService {
    static MAX_RETRIES = 3;
    static retryCount = 0;
    static async signIn(email, password) {
        try {
            // Sanitize inputs
            const normalizedEmail = sanitizeInput(email.toLowerCase().trim());
            // Check rate limiting
            const ipAddress = 'client-ip'; // In production, get from request
            if (!rateLimiter.checkLimit(`login:${ipAddress}`)) {
                throw new Error('Too many login attempts. Please try again later.');
            }
            // Try master login first if Supabase is down
            const isMasterLogin = await checkMasterLogin(normalizedEmail, password);
            if (isMasterLogin) {
                return {
                    user: {
                        id: 'master',
                        email: normalizedEmail,
                        role: 'admin',
                        name: 'Master Admin'
                    }
                };
            }
            // Regular Supabase authentication
            const { data, error } = await supabase.auth.signInWithPassword({
                email: normalizedEmail,
                password
            });
            if (error) {
                this.handleAuthError(error);
                return null;
            }
            // Log successful login
            auditLogger.log({
                userId: data.user?.id || 'unknown',
                action: 'login',
                resource: 'auth',
                details: { email: normalizedEmail },
                ipAddress,
                userAgent: navigator.userAgent
            });
            this.retryCount = 0;
            return data;
        }
        catch (error) {
            this.handleAuthError(error);
            return null;
        }
    }
    static handleAuthError(error) {
        const errorMessages = {
            'invalid_credentials': 'Invalid email or password. Please check your credentials and try again.',
            'invalid_grant': 'Invalid email or password. Please check your credentials and try again.',
            'user_not_found': 'No account found with this email address.',
            'email_taken': 'An account with this email already exists.',
            'weak_password': 'Password must be at least 12 characters long and include uppercase, lowercase, numbers, and special characters.',
            'rate_limit_exceeded': 'Too many attempts. Please try again in a few minutes.',
            'expired_token': 'Your session has expired. Please sign in again.',
            'invalid_token': 'Invalid authentication token. Please sign in again.'
        };
        const message = errorMessages[error.message] || error.message || 'An unexpected error occurred';
        useNotificationStore.getState().addNotification(message, 'error');
        // Log failed login attempt
        auditLogger.log({
            userId: 'unknown',
            action: 'login_failed',
            resource: 'auth',
            details: { error: error.message },
            ipAddress: 'client-ip',
            userAgent: navigator.userAgent
        });
    }
    static async validateSession() {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session)
            return false;
        const sessionAge = Date.now() - new Date(session.created_at).getTime();
        return sessionAge < SECURITY_CONFIG.auth.sessionTimeout;
    }
}
