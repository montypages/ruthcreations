
import { getCategories } from '$lib/servers/categories';
import { getPosts } from '$lib/servers/posts.js';

export async function load({ locals }) {
	return {
		posts: await getPosts(locals.supabase),
		categories: await getCategories(locals.supabase)
	};
}
