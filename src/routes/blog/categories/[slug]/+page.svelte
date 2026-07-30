<script>
	let { data } = $props();

	import BlogCard from '$lib/components/blog/BlogCard.svelte';
</script>

<div class="container">
	<h1>{data.category.name}</h1>
	
	<div class="auto-grid" style="--grid-size: 360px;">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>