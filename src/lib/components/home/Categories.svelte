<script>
	import CategoryCard from '../blog/CategoryCard.svelte';
	import { categoriesList } from '$lib/data/categories';
</script>

<section id="categories">
	<div class="container">
		<h2>What I Make</h2>
		<div class="auto-grid" style="--grid-size: 400px;">
			{#each categoriesList as category}
				<CategoryCard {category} />
			{/each}
		</div>
	</div>
</section>

<style>
</style>
