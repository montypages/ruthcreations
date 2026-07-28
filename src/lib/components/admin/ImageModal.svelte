<script>
	import { uploadBlogImage } from '$lib/utils/uploadBlogImg';

	let {
		open = $bindable(false),
		onInsert
	} = $props();

	let file = $state(null);
	let alt = $state('');
	let caption = $state('');
	let uploading = $state(false);

	async function insertImage() {
		if (!file) return;

		uploading = true;

		try {
			const src = await uploadBlogImage(file);

			onInsert({
				src,
				alt,
				caption
			});

			file = null;
			alt = '';
			caption = '';
			open = false;

		} finally {
			uploading = false;
		}
	}
</script>

{#if open}
	<div class="modal-backdrop">
		<div class="modal">

			<h2>Insert Image</h2>

			<input
				type="file"
				accept="image/*"
				onchange={(e) => file = e.target.files[0]}
			/>

			<input
				type="text"
				bind:value={alt}
				placeholder="Alt text"
			/>

			<textarea
				bind:value={caption}
				rows="3"
				placeholder="Caption"
			></textarea>

			<div class="buttons">
				<button
					type="button"
					onclick={() => open = false}
				>
					Cancel
				</button>

				<button
					type="button"
					disabled={!file || uploading}
					onclick={insertImage}
				>
					{uploading ? 'Uploading…' : 'Insert'}
				</button>
			</div>

		</div>
	</div>
{/if}