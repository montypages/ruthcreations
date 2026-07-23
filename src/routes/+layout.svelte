<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/app.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Emilys+Candy&family=Fredericka+the+Great&family=Snowburst+One&display=swap" rel="stylesheet">
</svelte:head>

<div class="full-page">

	<Header />
	
	<main>
		{@render children()}
	</main>
	
	<Footer />

</div>


<style>
	.full-page {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
	}
</style>