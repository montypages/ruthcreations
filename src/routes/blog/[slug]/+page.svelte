<script>
	import HeartButton from "$lib/components/blog/HeartButton.svelte";
	import { tiptapToHTML } from "$lib/utils/tiptap";

	let { data } = $props();
	const postContent = tiptapToHTML(data.post.content);

</script>

<article>

	<div class="blog-hero">
		<h1>{data.post.title}</h1>
		<img
			src={data.post.image.src}
			alt={data.post.image.alt}
		>
		<HeartButton postId={data.post.id} initialCount={data.post.heart_count} />
	</div>

    <div class="container">
        {@html postContent}
    </div>

</article>

<style>
    article {
        margin-bottom: 2rem;
    }

	.blog-hero {
		position: relative;
		overflow: hidden;
		& img {
			position: absolute;
			width: 100%;
			top: -50%;
			transform: translate(0 50%);
			z-index: -1;
			opacity: 25%;
		}
	}
</style>