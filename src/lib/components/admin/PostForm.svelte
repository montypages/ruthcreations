<script>
	import TipTapEditor from './TipTapEditor.svelte';
	import { goto } from '$app/navigation';
	import { createSlug } from '$lib/utils/createSlugs';
	import PrimaryImageUpload from './PrimaryImageUpload.svelte';
	import Button from '../ui/Button.svelte';

	let { post = null, categories = [] } = $props();
	let title = $state(post?.title ?? '');
	let slug = $state(post?.slug ?? '');
	let description = $state(post?.description ?? '');
	let selectedCategories = $state(post?.categories?.map((c) => c.id) ?? []);
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
	let imgSrc = $state(post?.img_src ?? '');
	let imgAlt = $state(post?.img_alt ?? '');

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
			imgSrc,
			imgAlt,
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

	<PrimaryImageUpload bind:imgSrc bind:imgAlt />

	<label>
		Description
		<textarea bind:value={description}></textarea>
	</label>

	<label for="content"> Content </label>

	<TipTapEditor id="content" {content} updateContent={(value) => (content = value)} />

	<div class="category-container">
		<h2>Categories</h2>
		{#each categories as category}
			<label class="category">
				<input type="checkbox" value={category.id} bind:group={selectedCategories} />
				{category.name}
			</label>
		{/each}
	</div>

	<Button onclick={() => submitPost(false)} btnText="Save Draft" />
	<Button onclick={() => submitPost(true)} btnText="Publish" />
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

	.category {
		display: block;
		font-size: var(--size-0);
		padding-left: 1em;
	}

	h2 {
		font-size: var(--size-1);
		margin: 0;
		line-height: 1.2;
	}
</style>
