
import { getPosts } from '$lib/servers/posts';
import { getCategories } from '$lib/servers/categories';

export async function load({ locals }) {
    return {
      posts: await getPosts(locals.supabase),
      categories: await getCategories(locals.supabase)
    }
}
