// Create a function that compresses, converts, and uploads blog images to the databse
import { supabase } from '$lib/supabase/supabaseClient';
import imageCompression from 'browser-image-compression';

export async function uploadBlogImage(file) {
	const compressedFile = await imageCompression(file, {
		maxSizeMB: 0.5,
		maxWidthOrHeight: 1200,
		useWebWorker: true
	});

	const fileName = `${crypto.randomUUID()}-${compressedFile.name}`;

	const { error } = await supabase.storage.from('blog-images').upload(fileName, compressedFile);

	if (error) {
		throw error;
	}

	const { data } = await supabase.storage.from('blog-images').getPublicUrl(fileName);

	return data.publicUrl;
}

