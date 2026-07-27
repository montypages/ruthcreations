import { error } from '@sveltejs/kit';
import { getPostById } from '$lib/servers/posts';
import { getCategories } from '$lib/servers/categories';

export async function load({ params }) {
	const post = await getPostById(params.id);
	const categories = await getCategories();

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post,
		categories
	};
}