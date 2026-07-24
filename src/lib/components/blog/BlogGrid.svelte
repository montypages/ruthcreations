<script>
	import BlogCard from "./BlogCard.svelte";
    import { posts } from "$lib/data/posts";

</script>

<div class="auto-grid" style="--grid-size:320px">

    {#each posts as post}
        <BlogCard {post} />
    {/each}
</div>