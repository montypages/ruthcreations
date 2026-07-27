<script>
	import CategoryCard from '../blog/CategoryCard.svelte';

	let { categories } = $props();
</script>

<section id="categories">
	<div class="container">
		<h2>What I Make</h2>
		<div class="auto-grid" style="--grid-size: 400px;">
			{#each categories as category}
				<CategoryCard {category} />
			{/each}
		</div>
	</div>
</section>

<style>
</style>
