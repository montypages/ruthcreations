import { supabase } from "$lib/supabase/supabaseClient";
import { getAdminPosts } from "$lib/servers/posts";

export async function load() {
    return {
        posts: await getAdminPosts()
    }
}