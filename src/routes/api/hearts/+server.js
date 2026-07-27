import { json } from '@sveltejs/kit';
import { addHeart, removeHeart, hasHearted } from '$lib/servers/hearts';

export async function POST({ request }) {

	const { postId, sessionId } = await request.json();

	await addHeart(postId, sessionId);

	return json({
		success: true
	});
}

export async function DELETE({ request }) {
	const { postId, sessionId } = await request.json();

	await removeHeart(postId, sessionId);

	return json({
		success: true
	});
}

export async function GET({ url }) {
	const postId = url.searchParams.get('postId');
	const sessionId = url.searchParams.get('sessionId');

	const liked = await hasHearted(postId, sessionId);

	return json({
		liked
	});
}