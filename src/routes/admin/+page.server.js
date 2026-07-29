
import { getAdminPosts } from "$lib/servers/posts";

export async function load({ locals }) {
    return {
        posts: await getAdminPosts(locals.supabase)
    }
}