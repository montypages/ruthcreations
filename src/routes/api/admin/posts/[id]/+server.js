import { json } from '@sveltejs/kit';
import { updatePost } from '$lib/servers/posts';
import { deletePost } from '$lib/servers/posts';

export async function PUT({ params, request }) {
	const post = await request.json();

	const updatedPost = await updatePost(
		params.id,
		post
	);

	return json(updatedPost);
}

export async function DELETE({ params }) {
	await deletePost(params.id);

	return new Response(null, {
		status: 204
	});
}