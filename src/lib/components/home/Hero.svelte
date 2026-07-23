<script>
    import heroImg from '$lib/assets/Ruth.jpeg'
</script>

<div class="hero container">
    <div class="hero-text">
        <h1 class="title">Ruth Creations</h1>
        <p class="subtitle">See what Ruth has created...</p>
    </div>
    <div class="hero-img">
        <img src={heroImg} alt="Ruth">
    </div>
</div>


<style>
    .hero {
        display: flex;
        position: relative;
    }

    .hero-img {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        opacity: 50%;
        height: 50%;
    }

    img {
        height: 100%;
    }
</style>