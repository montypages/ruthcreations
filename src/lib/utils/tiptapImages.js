export function getImageUrls(node, urls = []) {
	if (!node) return urls;

	if (
		node.type === 'image' &&
		node.attrs?.src
	) {
		urls.push(node.attrs.src);
	}

	if (node.content) {
		for (const child of node.content) {
			getImageUrls(child, urls);
		}
	}

	return urls;
}