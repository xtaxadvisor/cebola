import { DatabaseService } from './index';
import type { Database } from '../../lib/supabase/types';
type Client = Database['public']['Tables']['clients']['Row'];
declare class ClientService extends DatabaseService<'clients'> {
    constructor();
    getByUserId(userId: string): Promise<any>;
    updateStatus(clientId: string, status: Client['status']): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["clients"]["Row"], "clients", (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["clients"] extends infer T ? T extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["clients"] ? T extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
}
export declare const clientService: ClientService;
export {};
