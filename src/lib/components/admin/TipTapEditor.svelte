<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Figure from '$lib/tiptap/Figure';
	import ImageModal from './ImageModal.svelte';

	let { content = {}, updateContent } = $props();

	let editorElement;
	let editor;
	let showImageModal = $state(false);

function insertFigure(data) {

	if (!editor) return;

	editor
		.chain()
		.focus()
		.setImage(data)
		.run();
}

	onMount(() => {
		editor = new Editor({
			element: editorElement,

			extensions: [StarterKit, Figure],

			content,

			onUpdate({ editor }) {
				updateContent(editor.getJSON());
			}
		});
	});

	onDestroy(() => {
		editor?.destroy();
	});
</script>

<div class="toolbar">
	<button type="button" onclick={() => (showImageModal = true)}> 📷 Image </button>
</div>

<ImageModal bind:open={showImageModal} onInsert={insertFigure} />

<div bind:this={editorElement}></div>

<!-- Should the global styles be in a seperate css file instead? -->
<style>
	:global(.ProseMirror) {
		min-height: 300px;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 8px;
		outline: none;
	}

	:global(.ProseMirror p) {
		margin-bottom: 1rem;
	}
</style>
