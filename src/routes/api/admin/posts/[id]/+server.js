import { json } from '@sveltejs/kit';
import { updatePost } from '$lib/servers/posts';
import { deletePost } from '$lib/servers/posts';

export async function PUT({ locals, params, request }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	const post = await request.json();

	const updatedPost = await updatePost(
		locals.supabase, 
		params.id,
		post
	);

	return json(updatedPost);
}

export async function DELETE({ locals, params }) {
	if (!locals.session) {
		return new Response('Unauthorized', {
			status: 401
		});
	}

	await deletePost(locals.supabase, params.id);

	return new Response(null, {
		status: 204
	});
}