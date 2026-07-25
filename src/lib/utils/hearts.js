export function getHeartKey(postId) {
	return `hearted-post-${postId}`;
}

export function hasHearted(postId) {
	if (typeof sessionStorage === 'undefined') return false;

	return sessionStorage.getItem(getHeartKey(postId)) === 'true';
}

export function addHeart(postId) {
	sessionStorage.setItem(getHeartKey(postId), 'true');
}

export function removeHeart(postId) {
	sessionStorage.removeItem(getHeartKey(postId));
}

export function getHeartCount(post) {
	return post.hearts + (hasHearted(post.id) ? 1 : 0);
}