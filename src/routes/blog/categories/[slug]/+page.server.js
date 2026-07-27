import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabase/supabaseClient.js';
import { getCategoriesBySlug } from '$lib/servers/categories.js';
import { getPosts } from '$lib/servers/posts.js';

export async function load({ params }) {
	const category = await getCategoriesBySlug(params.slug);
	const posts = await getPosts();

	if (!category) {
		throw error(404, 'Category not found');
	}

	const filteredPosts = posts.filter((post) =>
		post.categories.some((c) => c.slug === category.slug)
	);

	return {
		category,
		posts: filteredPosts
	};
}
