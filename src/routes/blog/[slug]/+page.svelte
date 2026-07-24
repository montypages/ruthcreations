<script>
	let { data } = $props();

	const { post } = data;
</script>

<article>

	<h1>{post.title}</h1>

	<img
		src={post.image.src}
		alt={post.image.alt}
	>

    <div class="container">
        {@html post.content}
    </div>

</article>

<style>
    article {
        margin-bottom: 2rem;
    }

    img {
        display: block;
        margin: 0 auto;
    }
</style>