import type { Database } from '../../lib/supabase/types';
type Tables = Database['public']['Tables'];
export declare class DatabaseService<T extends keyof Tables> {
    protected table: T;
    constructor(table: T);
    getAll(): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T]["Row"], T, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] extends infer T_1 ? T_1 extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] ? T_1 extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">[]>;
    getById(id: string): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T]["Row"], T, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] extends infer T_1 ? T_1 extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] ? T_1 extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
    create(data: Tables[T]['Insert']): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T]["Row"], T, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] extends infer T_1 ? T_1 extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] ? T_1 extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
    update(id: string, data: Tables[T]['Update']): Promise<import("@supabase/postgrest-js").UnstableGetResult<Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T]["Row"], T, (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] extends infer T_1 ? T_1 extends (Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"][T] ? T_1 extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*">>;
    delete(id: string): Promise<void>;
}
export {};
