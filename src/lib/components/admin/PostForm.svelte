<script>
	import TipTapEditor from './TipTapEditor.svelte';
	import { goto } from '$app/navigation';
	import { createSlug } from '$lib/utils/createSlugs';

	let { post = null, categories = [] } = $props();
	let title = $state(post?.title ?? '');
	let slug = $state(post?.slug ?? '');
	let description = $state(post?.description ?? '');
	let selectedCategories = $state(post?.categories.map((c) => c.id) ?? []);
	let content = $state(
		post?.content ?? {
			type: 'doc',
			content: [
				{
					type: 'paragraph'
				}
			]
		}
	);
	let saveAction = $state('');
	let slugEdited = $state(!!post);

	$effect(() => {
		if (!slugEdited) {
			slug = createSlug(title);
		}
	});

	async function submitPost(publish) {
		const postData = {
			title,
			slug,
			description,
			content,
			published: publish,
			categories: selectedCategories
		};

		const url = post ? `/api/admin/posts/${post.id}` : '/api/admin/posts';

		const method = post ? 'PUT' : 'POST';

		try {
			const response = await fetch(url, {
				method,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(postData)
			});

			if (!response.ok) {
				// Handle the error however you'd like
				console.error(await response.text());
				return;
			}

			const result = await response.json();

			await goto('/admin');
		} catch (err) {
			console.error(err);
		}
	}
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		submitPost();
	}}
>
	<label>
		Title
		<input bind:value={title} />
	</label>

	<label>
		Slug
		<input
			bind:value={slug}
			oninput={() => {
				slugEdited = true;
			}}
		/>
	</label>

	<label>
		Description
		<textarea bind:value={description}></textarea>
	</label>

	<label for="content"> Content </label>

	<TipTapEditor id="content" {content} updateContent={(value) => (content = value)} />

	<h2>Categories</h2>

	{#each categories as category}
		<label>
			<input type="checkbox" value={category.id} bind:group={selectedCategories} />

			{category.name}
		</label>
	{/each}

	<button type="button" onclick={() => submitPost(false)}> Save Draft </button>

	<button type="button" onclick={() => submitPost(true)}> Publish </button>
</form>

<style>
	form {
		display: grid;
		width: min(90%, 500px);
		gap: 1rem;
		margin: 0 auto;
	}

	label {
		display: grid;
	}
</style>
