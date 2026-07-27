<script>
	import Categories from "$lib/components/home/Categories.svelte";

    let { data } = $props();
</script>

<h1>Blog</h1>

<Categories categories={data.categories} />