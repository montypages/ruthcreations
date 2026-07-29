
import { getPostBySlug } from "$lib/servers/posts";

export async function load({ params, locals }) {
    const post = await getPostBySlug(locals.supabase, params.slug);

    if(!post) {
        throw error(404, 'Post not found!');
    }
    
    return {
        post
    }
}