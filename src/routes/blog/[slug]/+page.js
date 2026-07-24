import { error } from '@sveltejs/kit';
import { posts } from '$lib/data/posts';

export function load({ params }) {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}