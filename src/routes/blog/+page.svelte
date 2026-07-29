<script>
	import Categories from "$lib/components/home/Categories.svelte";
    import BlogGrid from "$lib/components/blog/BlogGrid.svelte";

    let { data } = $props();
</script>

<h1>Blog</h1>

<Categories categories={data.categories} />

<div class="container">
    <h2>All the Posts</h2>
    <BlogGrid posts={data.posts} />
</div>