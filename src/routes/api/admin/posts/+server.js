import { json } from '@sveltejs/kit';
import { createPost } from '$lib/servers/posts';

export async function POST({ locals, request }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	const post = await request.json();

	const newPost = await createPost(locals.supabase, post);

	return json(newPost);
}
