import { supabase } from '$lib/supabase/supabaseClient';

function formatPost(post) {
	return {
		...post,
		image: {
			src: post.img_src,
			alt: post.img_alt
		},
		categories: post.post_categories.map((item) => item.categories),
		heart_count: post.hearts[0]?.count ?? 0
	};
}

const postWithCategories = `*, post_categories(categories(id, name, slug)), hearts(count)`;

export async function getPosts() {
	const { data: posts, error } = await supabase.from('posts').select(postWithCategories);

	if (error) {
		console.error(error);
		return {
			posts: []
		};
	}

	const formattedPosts = posts.map(formatPost);

	return formattedPosts;
}

export async function getPostBySlug(slug) {
	const { data: post, error } = await supabase.from('posts').select(postWithCategories).eq('slug', slug).single();

	if (error) {
		throw error;
	}

	const formattedPost = formatPost(post);

	return formattedPost;
}
