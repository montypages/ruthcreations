import { json } from '@sveltejs/kit';
import { addHeart, removeHeart, hasHearted } from '$lib/servers/hearts';

export async function POST({ locals, request }) {

	const { postId, sessionId } = await request.json();

	await addHeart(locals.supabase, postId, sessionId);

	return json({
		success: true
	});
}

export async function DELETE({ locals, request }) {
	const { postId, sessionId } = await request.json();

	await removeHeart(locals.supabase, postId, sessionId);

	return json({
		success: true
	});
}

export async function GET({ locals, url }) {
	const postId = url.searchParams.get('postId');
	const sessionId = url.searchParams.get('sessionId');

	const liked = await hasHearted(locals.supabase, postId, sessionId);

	return json({
		liked
	});
}