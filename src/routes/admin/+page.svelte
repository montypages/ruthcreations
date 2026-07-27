<script>
	import AdminBlogCard from '$lib/components/blog/AdminBlogCard.svelte';

	let { data } = $props();

	async function deletePost(id) {
		const confirmed = confirm('Are you sure you want to delete this post?');

		if (!confirmed) return;

		await fetch(`/api/admin/posts/${id}`, {
			method: 'DELETE'
		});

		location.reload();
	}
</script>

<div class="container">
	<h1>Admin Dashboard</h1>
</div>

<div class="container padding-top-bottom">
	<div class="control-btn">
		<a href="/admin/new"> Create New Post </a>
	</div>
</div>

{#each data.posts as post}
	<article>
		<h2>{post.title}</h2>

		<p>
			{post.published ? 'Published' : 'Draft'}
		</p>

		<a href={`/admin/edit/${post.id}`}> Edit </a>

		<button onclick={() => deletePost(post.id)}> Delete </button>
	</article>
{/each}

<style>
	.control-btn {
		width: fit-content;
		padding: 0.5em 1.5em;
		background-color: var(--clr-light);
		border-radius: 5px;
	}
</style>
