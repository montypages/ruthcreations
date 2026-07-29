

export async function deleteBlogImage(supabase, imageUrl) {
	if (!imageUrl) return;

	const url = new URL(imageUrl);

	// Extract everything after /blog-images/
	const filePath = url.pathname.split('/blog-images/')[1];

	if (!filePath) return;

	const { error } = await supabase.storage
		.from('blog-images')
		.remove([filePath]);

	if (error) {
		throw error;
	}
}

export async function deleteBlogImages(supabase, urls) {
	if (!urls.length) return;

	const files = urls
		.map((url) => {
			try {
				const pathname = new URL(url).pathname;
				return pathname.split('/blog-images/')[1];
			} catch {
				return null;
			}
		})
		.filter(Boolean);

	if (!files.length) return;

	const { error } = await supabase.storage
		.from('blog-images')
		.remove(files);

	if (error) throw error;
}