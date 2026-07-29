
export async function getHeartCount(supabase, postId) {
	const { count, error } = await supabase
		.from('hearts')
		.select('*', { count: 'exact', head: true })
		.eq('post_id', postId);

	if (error) throw error;

	return count ?? 0;
}


export async function hasHearted(supabase, postId, sessionId) {
	const { data, error } = await supabase
		.from('hearts')
		.select('id')
		.eq('post_id', postId)
		.eq('session_id', sessionId)
		.limit(1);

	if (error) throw error;

	return data.length > 0;
}

export async function addHeart(supabase, postId, sessionId) {

	const { error } = await supabase
		.from('hearts')
		.insert({
			post_id: postId,
			session_id: sessionId
		});

	if (error) throw error;
}

export async function removeHeart(supabase, postId, sessionId) {
	const { error } = await supabase
		.from('hearts')
		.delete()
		.eq('post_id', postId)
		.eq('session_id', sessionId);

	if (error) {
		throw error;
	}
}