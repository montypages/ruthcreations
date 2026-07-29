export async function uploadBlogImage(supabase, file) {
	const uniqueId = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;

	const fileName = `${uniqueId}-${file.name}`;

	const { error } = await supabase.storage.from('blog-images').upload(fileName, file);

	if (error) {
		throw error;
	}

	const { data } = supabase.storage.from('blog-images').getPublicUrl(fileName);

	return data.publicUrl;
}
