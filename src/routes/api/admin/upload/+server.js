import { json } from '@sveltejs/kit';
import { uploadBlogImage } from '$lib/servers/images';

export async function POST({ request, locals }) {

	if (!locals.user) {
		return json(
			{ error: 'Unauthorized' },
			{ status: 401 }
		);
	}

	const formData = await request.formData();

	const file = formData.get('image');

	if (!file) {
		return json(
			{ error: 'No image provided' },
			{ status: 400 }
		);
	}

	try {
		const url = await uploadBlogImage(
			locals.supabase,
			file
		);

		return json({
			url
		});

	} catch (error) {
		console.error(error);

		return json(
			{ error: 'Upload failed' },
			{ status: 500 }
		);
	}
}