<script>
	import { goto } from '$app/navigation';
	import Button from '../ui/Button.svelte';

	let { post } = $props();

	async function deletePost(id) {
		const confirmed = confirm('Are you sure you want to delete this post?');

		if (!confirmed) return;

		await fetch(`/api/admin/posts/${id}`, {
			method: 'DELETE'
		});

		location.reload();
	}
</script>

<div class="list-item">
	<img src={post.image.src} alt={post.image.alt} />
	<h3 class="item-title">{post.title}</h3>
	<p class="description">{post.description}</p>
	<p class="published">{post.published ? 'Published' : 'Draft'}</p>
	<Button onclick={() => goto(`/admin/edit/${post.id}`)} btnText="Edit" btnSize="var(--size--1)" />
	<Button onclick={() => deletePost(post.id)} btnText="Delete" btnSize="var(--size--1)" />
</div>

<style>
	.list-item {
		/* width: min(90%, 1200px); */
		/* margin: 0 auto; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
		padding: 0.5em;
		background-color: hsl(0 0 0 / 0.2);
		border-radius: 5px;
		overflow: hidden;
	}

	img {
		width: 40px;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 100vw;
	}

	.item-title,
	.description {
		margin: 0;
		margin-right: auto;
		width: 30%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		line-height: 1.2;
		font-size: var(--size-1);
		min-width: 0;
		flex: 1;
	}

	.description {
		margin: 0;
		margin-left: auto;
		font-size: var(--size-0);
	}

	.published {
		color: var(--clr-secondary-dk);
		font-size: var(--size--1);
		margin: 0;
	}
</style>
