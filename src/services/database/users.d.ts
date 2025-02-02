import { DatabaseService } from './index';
import type { Database } from '../../lib/supabase/types';
type User = Database['public']['Tables']['users']['Row'];
declare class UserService extends DatabaseService<'users'> {
    constructor();
    getByAuthId(authId: string): Promise<any>;
    updateProfile(userId: string, profile: Partial<User>): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"]["Row"], "users", (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"] extends infer T ? T extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"] ? T extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
}
export declare const userService: UserService;
export {};
