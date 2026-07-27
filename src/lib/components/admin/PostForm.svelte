<script>
	let { post = null, categories = [] } = $props();
	let title = $state(post?.title ?? '');
	let slug = $state(post?.slug ?? '');
	let description = $state(post?.description ?? '');
	let selectedCategories = $state(post?.categories.map(c => c.id) ?? []);
	let content = $state(
		post?.content ?? {
			type: 'doc',
			content: []
		}
	);
	let published = $state(false);

	async function submitPost() {
		const postData = {
			title,
			slug,
			description,
			content,
			published,
			categories: selectedCategories
		};

		const url = post ? `/api/admin/posts/${post.id}` : '/api/admin/posts';

		const method = post ? 'PUT' : 'POST';

		const response = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postData)
		});

		const result = await response.json();
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
		<input bind:value={slug} />
	</label>

	<label>
		Description
		<textarea bind:value={description}></textarea>
	</label>

	<label>
		Content
		<textarea bind:value={content}></textarea>
	</label>

	<h2>Categories</h2>

	{#each categories as category}
		<label>
			<input type="checkbox" value={category.id} bind:group={selectedCategories} />

			{category.name}
		</label>
	{/each}

	<label>
		<input type="checkbox" bind:checked={published} />
		Publish post
	</label>

	<button> Create Post </button>
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
