<script>
	import PostForm from "$lib/components/admin/PostForm.svelte";

    let { data } = $props();
</script>

<h1>Create New Post</h1>

<PostForm categories={data.categories}/>