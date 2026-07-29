import { createBrowserClient } from '@supabase/ssr';
import { supabaseUrl, supabaseAnonKey } from './config';

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);
