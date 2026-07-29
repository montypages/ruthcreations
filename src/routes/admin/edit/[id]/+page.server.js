import { error } from '@sveltejs/kit';
import { getPostById } from '$lib/servers/posts';
import { getCategories } from '$lib/servers/categories';

export async function load({ locals, params }) {
	const post = await getPostById(locals.supabase, params.id);
	const categories = await getCategories(locals.supabase);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post,
		categories
	};
}