import { supabase } from '$lib/supabase/supabaseClient';

export async function load() {
	const { data: posts, error } = await supabase.from('posts').select('*');

	if (error) {
		console.error(error);
		return {
			posts: []
		};
	}

  const formattedPosts = posts.map((post) => ({
    ...post,
    image: {
      src: post.img_src,
      alt: post.img_src
    }
  }));

	return {
    posts: formattedPosts
  };
}
