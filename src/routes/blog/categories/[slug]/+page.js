import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';
import { categories, categoriesList } from '$lib/data/categories';

export function load({ params }) {
	const category = categoriesList.find((c) => c.slug === params.slug);

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
