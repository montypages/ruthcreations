<script>
	import PostListItem from '$lib/components/admin/PostListItem.svelte';
	import AdminBlogCard from '$lib/components/blog/AdminBlogCard.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/Button.svelte';

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
	<Button onclick={() => goto('/admin/new')} btnText="Create New Post" />
</div>

<div class="container">
	<ul>
		{#each data.posts as post}
			<li class="post-item">
				<PostListItem {post} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.control-btn {
		width: fit-content;
		padding: 0.5em 1.5em;
		background-color: var(--clr-light);
		border-radius: 5px;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin: 0;
		padding: 0;
	}

	li + li {
		margin-top: 0.5em;
	}

	.welcome {
		font-size: var(--size--1);
	}
</style>
