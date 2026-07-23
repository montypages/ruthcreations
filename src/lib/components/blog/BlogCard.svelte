<script>
    let { src, alt, imgX="center", imgY="center", cardTitle, cardDescription } = $props();
</script>

<div class="card">
    <h3>{cardTitle}</h3>
    <img src={src} alt={alt} style="--imgX: {imgX}; --imgY: {imgY}">
    <p>{cardDescription}</p>
</div>


<style>
    .card {
        padding: 1em;
        background-color: var(--clr-primary-dk);
    }

    img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        object-position: var(--imgX, center) var(--imgY, center);
    }

    h3 {
        margin: 0;
        position: relative;
        z-index: 1;
    }

</style>