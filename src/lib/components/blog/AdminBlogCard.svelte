<script>
	import HeartButton from "./HeartButton.svelte";

    let { post } = $props();
</script>

<div class="card">
	<a href="/blog/{post.slug}">
		<h3>{post.title}</h3>
		<img src={post.image.src} alt={post.image.alt ? post.image.alt : post.title} />
		<p>{post.description}</p>
	</a>
	<button>Edit</button>
</div>

<style>
	.card {
		padding: 1em;
		background-color: var(--clr-light);
		color: var(--clr-primary-dk);
		background-image: url('$lib/assets/lined-paper.png');
		box-shadow: 0 0 20px hsl(0 0 0 / 0.2);
		transition: scale 240ms ease;
		&:hover {
			scale: 1.005;
		}
		&:hover h3 {
			text-decoration: underline;
		}
	}

	img {
		display: block;
		background-color: #eee;
		padding: 1em;
		margin: 0 auto;
		width: 80%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: var(--imgX, center) var(--imgY, center);
		border-radius: 3px;
		box-shadow:
			0 0 20px hsl(0 0 0 / 0.2),
			inset 1px 1px white,
			inset -1px -1px #ddd;
		rotate: 3deg;
	}

	h3 {
		margin: 0;
        font-size: var(--size-1);
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
		position: relative;
		z-index: 1;
	}

	p {
		color: var(--clr-primary-dk);
        font-size: var(--size-0);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
		overflow: hidden;
        text-overflow: ellipsis;
	}

	a {
		text-decoration: none;
	}
</style>
