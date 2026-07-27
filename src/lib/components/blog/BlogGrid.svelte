<script>
	import BlogCard from "./BlogCard.svelte";

    let { posts } = $props();
</script>

<div class="auto-grid" style="--grid-size:280px">

    {#each posts as post}
        <BlogCard {post} />
    {/each}
</div>