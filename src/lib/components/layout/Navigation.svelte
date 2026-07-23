<script>
	import logo from '$lib/assets/Ruth.jpeg';
</script>

<nav>
	<div class="logo">
		<a href="/">
			<img src={logo} width="100" alt="Ruth" />
		</a>
	</div>
	<h3><a href="/">Ruth Creations</a></h3>
	<ul class="nav-links">
		<li class="nav-link"><a href="#">Cooking</a></li>
		<li class="nav-link"><a href="#">Fiber Arts</a></li>
		<li class="nav-link"><a href="#">Builds</a></li>
		<li class="nav-link"><a href="#">Artwork</a></li>
	</ul>
</nav>

<style>
	nav {
		padding: 0.5em;
		display: flex;
		align-items: center;
        gap: 0.5em;
        background-color: hsl(from var(--clr-primary) h s l / 0.2);
	}
	.nav-links {
		list-style-type: none;
		margin: 0;
		margin-left: auto;
		padding: 0;
		display: flex;
		justify-content: space-around;
	}

	a {
		color: var(--clr-light);
		text-decoration: none;
	}

	.nav-links a {
		font-family: var(--font-sans);
		padding: 0.5em 2em;
		&:hover {
			outline: 3px solid var(--clr-primary);
		}
	}
</style>
