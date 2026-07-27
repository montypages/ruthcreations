import { json } from '@sveltejs/kit';
import { createPost } from '$lib/servers/posts';

export async function POST({ request }) {
	const post = await request.json();

	const newPost = await createPost(post);

	return json(newPost);
}