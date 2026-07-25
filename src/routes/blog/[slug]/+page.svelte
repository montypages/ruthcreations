<script>
	import HeartButton from "$lib/components/blog/HeartButton.svelte";

	let { data } = $props();

	const { post } = data;
</script>

<article>

	<div class="blog-hero">
		<h1>{post.title}</h1>
		<img
			src={post.image.src}
			alt={post.image.alt}
		>
		<HeartButton {post} />
	</div>

    <div class="container">
        {@html post.content}
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