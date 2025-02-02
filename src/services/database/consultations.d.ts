import { DatabaseService } from './index';
import type { Database } from '../../lib/supabase/types';
type Consultation = Database['public']['Tables']['consultations']['Row'];
declare class ConsultationService extends DatabaseService<'consultations'> {
    constructor();
    getUpcoming(userId: string): Promise<any>;
    updateStatus(consultationId: string, status: Consultation['status']): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["consultations"]["Row"], "consultations", (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["consultations"] extends infer T ? T extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["consultations"] ? T extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
}
export declare const consultationService: ConsultationService;
export {};
