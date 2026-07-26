<script>
	import BlogCard from "$lib/components/blog/BlogCard.svelte";
	import About from "$lib/components/home/About.svelte";
	import Categories from "$lib/components/home/Categories.svelte";
    import Hero from "$lib/components/home/Hero.svelte";

	let { data } = $props();
</script>

<Hero />
<About />
<Categories />

<div class="auto-grid container">
	{#each data.posts as post }
		<BlogCard {post} />
	{/each}
</div>

<style>

</style>