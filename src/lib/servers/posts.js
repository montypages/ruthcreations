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
	const { data: post, error } = await supabase
		.from('posts')
		.select(postWithCategories)
		.eq('slug', slug)
		.single();

	if (error) {
		throw error;
	}

	const formattedPost = formatPost(post);

	return formattedPost;
}

export async function getPostById(id) {
	const { data: post, error } = await supabase
		.from('posts')
		.select(postWithCategories)
		.eq('id', id)
		.single();

	if (error) {
		throw error;
	}

	const formattedPost = formatPost(post);

	return formattedPost;
}

export async function createPost(post) {
	// 1. Create the post
	const { data: newPost, error: postError } = await supabase
		.from('posts')
		.insert({
			title: post.title,
			slug: post.slug,
			description: post.description,
			content: post.content,
			published: post.published ?? false
		})
		.select()
		.single();

	if (postError) {
		throw postError;
	}

	// 2. Create category relationships
	if (post.categories?.length) {
		const categoryRows = post.categories.map((categoryId) => ({
			post_id: newPost.id,
			category_id: categoryId
		}));

		const { error: categoryError } = await supabase.from('post_categories').insert(categoryRows);

		if (categoryError) {
			throw categoryError;
		}
	}

	// 3. Return the created post
	return newPost;
}

export async function getAdminPosts() {
	const { data, error } = await supabase
		.from('posts')
		.select(`
			id,
			title,
			slug,
			description,
			published,
			created_at
		`)
		.order('created_at', { ascending: false });

	if (error) {
		throw error;
	}

	return data;
}

export async function updatePost(id, post) {
	// 1. Update the post itself
	const { data: updatedPost, error: postError } = await supabase
		.from('posts')
		.update({
			title: post.title,
			slug: post.slug,
			description: post.description,
			content: post.content,
			published: post.published
		})
		.eq('id', id)
		.select()
		.single();

	if (postError) {
		throw postError;
	}


	// 2. Remove existing category relationships
	const { error: deleteError } = await supabase
		.from('post_categories')
		.delete()
		.eq('post_id', id);

	if (deleteError) {
		throw deleteError;
	}


	// 3. Add the current categories
	if (post.categories?.length) {
		const categoryRows = post.categories.map((categoryId) => ({
			post_id: id,
			category_id: categoryId
		}));

		const { error: categoryError } = await supabase
			.from('post_categories')
			.insert(categoryRows);

		if (categoryError) {
			throw categoryError;
		}
	}


	return updatedPost;
}
export async function deletePost(id, post) {
	// 1. Delete the post itself
	const { error } = await supabase
		.from('posts')
		.delete()
		.eq('id', id);

	if (error) {
		throw error;
	}


	return true;
}