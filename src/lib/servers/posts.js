
import { deleteBlogImage, deleteBlogImages } from './storage';
import { getImageUrls } from '$lib/utils/tiptapimages';

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

export async function getPosts(supabase) {
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

export async function getPostBySlug(supabase, slug) {
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

export async function getPostById(supabase, id) {
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

export async function createPost(supabase, post) {
	// 1. Create the post
	const { data: newPost, error: postError } = await supabase
		.from('posts')
		.insert({
			title: post.title,
			slug: post.slug,
			description: post.description,
			content: post.content,
			img_src: post.imgSrc,
			img_alt: post.imgAlt
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

export async function getAdminPosts(supabase) {
	const { data, error } = await supabase
		.from('posts')
		.select(
			`
			id,
			title,
			slug,
			description,
			img_src,
			img_alt,
			published,
			created_at
		`
		)
		.order('created_at', { ascending: false });

	if (error) {
		throw error;
	}

	const formattedPosts = data.map((post) => ({
		...post,
		image: {
			src: post.img_src,
			alt: post.img_alt
		}
	}));

	return formattedPosts;
}

export async function updatePost(supabase, id, post) {
	// 1. Update the post itself
	const { data: updatedPost, error: postError } = await supabase
		.from('posts')
		.update({
			title: post.title,
			slug: post.slug,
			description: post.description,
			content: post.content,
			img_src: post.imgSrc,
			img_alt: post.imgAlt
		})
		.eq('id', id)
		.select()
		.single();

	if (postError) {
		throw postError;
	}

	// 2. Remove existing category relationships
	const { error: deleteError } = await supabase.from('post_categories').delete().eq('post_id', id);

	if (deleteError) {
		throw deleteError;
	}

	// 3. Add the current categories
	if (post.categories?.length) {
		const categoryRows = post.categories.map((categoryId) => ({
			post_id: id,
			category_id: categoryId
		}));

		const { error: categoryError } = await supabase.from('post_categories').insert(categoryRows);

		if (categoryError) {
			throw categoryError;
		}
	}

	return updatedPost;
}

export async function deletePost(supabase, id) {
	// Get the post
	const { data: existingPost, error: fetchError } = await supabase
		.from('posts')
		.select(`img_src, content`)
		.eq('id', id)
		.single();

	if (fetchError) throw fetchError;

	// Delete images from the post contents
	const imageUrls = [existingPost.img_src, ...getImageUrls(existingPost.content)];

	const uniqueUrls = [...new Set(imageUrls)].filter(Boolean);

	await deleteBlogImages(supabase, uniqueUrls);

	// Delete the post
	const { error } = await supabase.from('posts').delete().eq('id', id);

	if (error) {
		throw error;
	}

	return true;
}
