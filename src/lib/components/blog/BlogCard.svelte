<script>
    let { href="#", src, alt, imgX="center", imgY="center", cardTitle, cardDescription } = $props();
</script>

<div class="card">
    <a href={href}>
        <h3>{cardTitle}</h3>
        <img src={src} alt={alt} style="--imgX: {imgX}; --imgY: {imgY}">
        <p>{cardDescription}</p>
    </a>
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
        box-shadow: 0 0 20px hsl(0 0 0 / 0.2),
                    inset 1px 1px white,
                    inset -1px -1px #ddd;
        rotate: 3deg;
    }

    h3 {
        margin: 0;
        position: relative;
        z-index: 1;
    }

    p {
        color: var(--clr-primary-dk);
    }

    a {
        text-decoration: none;
    }

</style>