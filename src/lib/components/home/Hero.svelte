<script>
    import heroImg from '$lib/assets/bird.png'
</script>

<div class="hero-wrapper">
    <div class="hero container">
        <div class="hero-text">
            <h1 class="title">See What Ruth Creates</h1>
            <p class="subtitle">Artwork, builds, cooking, and more...</p>
        </div>
        <div class="hero-img">
            <img src={heroImg} alt="Ruth">
        </div>
    </div>
</div>


<style>
    .hero-wrapper {
        background-color: hsl(0 0 0 / 0.2);
    }

    .hero {
        display: flex;
        position: relative;
    }

    .hero-img {
        position: absolute;
        top: 50%;
        right: 0;
        z-index: -1;
        max-height: 100%;
        transform: translate(0, -50%);
    }

    .hero-text {
        display: flex;
        flex-direction: column;
    }

    img {
        height: 100%;
    }

    h1 {
        margin: 0;
        line-height: 1;
    }
</style>