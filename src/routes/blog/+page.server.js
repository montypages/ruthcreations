import { supabase } from '$lib/supabase/supabaseClient';
import { getCategories } from '$lib/servers/categories';

export async function load() {
	return {
		categories: await getCategories()
	};
}
