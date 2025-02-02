import type { Database } from './types';
export declare const supabase: import("@supabase/supabase-js").SupabaseClient<Database, "public" extends keyof Database ? "public" : string & keyof Database, Database[SchemaName] extends import("@supabase/supabase-js/dist/module/lib/types").GenericSchema ? Database[SchemaName] : any>;
export declare function isWebSocketConnected(): boolean;
export declare const protaxChannel: null;
