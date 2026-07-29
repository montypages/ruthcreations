<script>
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import About from '$lib/components/home/About.svelte';
	import Categories from '$lib/components/home/Categories.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	let { data } = $props();

	let postsLatest = [...data.posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
	let postsPopular = [...data.posts].sort((a, b) => b.heart_count - a.heart_count);
</script>

<Hero />
<About />
<Categories categories={data.categories} />

<div class="container padding-top-bottom">
	<h2>Latest Posts</h2>
	<div class="auto-grid">
		{#each postsLatest as post, i}
			{#if i < 4}
				<BlogCard {post} />
			{/if}
		{/each}
	</div>
</div>

<div class="container padding-top-bottom">
	<h2>Most Popular Posts</h2>
	<div class="auto-grid">
		{#each postsPopular as post, i}
			{#if i < 4}
				<BlogCard {post} />
			{/if}
		{/each}
	</div>
</div>

<style>
</style>
