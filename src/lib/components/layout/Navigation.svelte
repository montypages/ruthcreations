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
		<li class="nav-link"><a href="/about">About</a></li>
		<li class="nav-link"><a href="/blog">Blog</a></li>
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

	.logo {
		width: 40px;
	}

	h3 {
		margin: 0;
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
			text-decoration: underline;
		}
	}

	.nav-link {
		transition: scale 240ms ease;
		&:hover {
			scale: 1.05;
		}
	}
</style>
