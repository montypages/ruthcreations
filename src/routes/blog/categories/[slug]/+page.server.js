import { error } from '@sveltejs/kit';
import { getCategoriesBySlug } from '$lib/servers/categories.js';
import { getPosts } from '$lib/servers/posts.js';

export async function load({ locals, params }) {
	console.log("Loading category: ", params.slug);

	try {const category = await getCategoriesBySlug(locals.supabase, params.slug);
	const posts = await getPosts(locals.supabase);

	if (!category) {
		throw error(404, 'Category not found');
	}

	const filteredPosts = posts.filter((post) =>
		post.categories.some((c) => c.slug === category.slug)
	);

	return {
		category,
		posts: filteredPosts
	};} catch (err) {
		console.error(err);
		throw err;
	}
}
