// Create a function that compresses, converts, and uploads blog images to the databse

import imageCompression from 'browser-image-compression';

export async function uploadBlogImage(supabase, file) {
	const compressedFile = await imageCompression(file, {
		maxSizeMB: 0.5,
		maxWidthOrHeight: 1200,
		useWebWorker: true
	});

	const uniqueId = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;

	const fileName = `${uniqueId}-${compressedFile.name}`;

	const { error } = await supabase.storage.from('blog-images').upload(fileName, compressedFile);

	if (error) {
		throw error;
	}

	const { data } = await supabase.storage.from('blog-images').getPublicUrl(fileName);

	return data.publicUrl;
}
