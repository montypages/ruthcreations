import { createServerClient } from '@supabase/ssr';
import { supabaseUrl, supabaseAnonKey } from './config';

export function createSupabaseServer(event) {
	return createServerClient(supabaseUrl, supabaseAnonKey, {
		cookies: {
			getAll() {
				return event.cookies.getAll();
			},

			setAll(cookies) {
				cookies.forEach(({ name, value, options }) => {
					event.cookies.set(name, value, options);
				});
			}
		}
	});
}
