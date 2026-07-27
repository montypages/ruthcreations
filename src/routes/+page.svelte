<script>
	import BlogCard from "$lib/components/blog/BlogCard.svelte";
	import About from "$lib/components/home/About.svelte";
	import Categories from "$lib/components/home/Categories.svelte";
    import Hero from "$lib/components/home/Hero.svelte";

	let { data } = $props();
</script>

<Hero />
<About />
<Categories categories={data.categories} />

<div class="container padding-top-bottom">
	<h2>Latest Posts</h2>
	<div class="auto-grid">
		{#each data.posts as post, i }
			{#if i < 4}
			<BlogCard {post} />
			{/if}
		{/each}
	</div>
</div>

<style>

</style>