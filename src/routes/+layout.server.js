import { getCategories } from "$lib/servers/categories";

export async function load({ locals }) {
    return {
        categories: await getCategories(locals.supabase)
    }
}