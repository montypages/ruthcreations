<script>
	import PostForm from '$lib/components/admin/PostForm.svelte';

	let { data } = $props();
</script>

<h1>Edit Post</h1>

<PostForm
	post={data.post}
	categories={data.categories}
/>