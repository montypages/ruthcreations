export function createSlug(text) {
	return text
		.toLowerCase()
		.trim()
		.normalize('NFD') // Split accented characters
		.replace(/[\u0300-\u036f]/g, '') // Remove accents
		.replace(/[^a-z0-9\s-]/g, '') // Remove punctuation
		.replace(/\s+/g, '-') // Spaces → hyphens
		.replace(/-+/g, '-'); // Collapse multiple hyphens
}