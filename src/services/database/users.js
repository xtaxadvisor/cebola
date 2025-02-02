import { DatabaseService } from './index';
class UserService extends DatabaseService {
    constructor() {
        super('users');
    }
    async getByAuthId(authId) {
        const { data, error } = await supabase
            .from(this.table)
            .select('*')
            .eq('auth_id', authId)
            .single();
        if (error)
            throw error;
        return data;
    }
    async updateProfile(userId, profile) {
        return this.update(userId, {
            ...profile,
            updated_at: new Date().toISOString()
        });
    }
}
export const userService = new UserService();
