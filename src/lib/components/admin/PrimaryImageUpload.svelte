<script>
	import imageCompression from 'browser-image-compression';

	let { imgSrc = $bindable(''), imgAlt = $bindable('') } = $props();

	let preview = $state(imgSrc);

	async function handleUpload(event) {
		const file = event.target.files[0];

		if (!file) return;

		const compressedFile = await imageCompression(file, {
			maxSizeMB: 0.5,
			maxWidthOrHeight: 1200,
			useWebWorker: true
		});

		const formData = new FormData();
		formData.append('image', compressedFile);

		const response = await fetch('/api/admin/upload', {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			console.error(await response.text());
			return;
		}

		const { url } = await response.json();

		imgSrc = url;
		preview = url;
	}
</script>

<div class="primary-image-upload">
	<label for="primary-image"> Primary Image </label>

	<input id="primary-image" type="file" accept="image/*" onchange={handleUpload} />

	<input type="text" bind:value={imgAlt} placeholder="Image description (alt text)" />

	{#if preview}
		<img src={preview} alt={imgAlt} width="300" />
	{/if}
</div>
