import { supabase } from "$lib/supabase/supabaseClient";
import { getPostBySlug } from "$lib/servers/posts";

export async function load({ params }) {
    const post = await getPostBySlug(params.slug);

    if(!post) {
        throw error(404, 'Post not found!');
    }
    
    return {
        post
    }
}