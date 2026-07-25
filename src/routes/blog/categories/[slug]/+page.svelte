<script>
	let { data } = $props();

	const { category, posts } = data;

	import BlogCard from '$lib/components/blog/BlogCard.svelte';
</script>

<div class="container">
	<h1>{category.name}</h1>
	
	<div class="auto-grid" style="--grid-size: 360px;">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>