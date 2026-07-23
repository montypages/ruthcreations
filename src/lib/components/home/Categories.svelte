<script>
	import BlogCard from "../blog/BlogCard.svelte";
    import flower from "$lib/assets/flower.jpeg";
    import crochet from "$lib/assets/hand-crochet.jpeg";
    import snowman from "$lib/assets/snowman.jpeg";
    import cookies from "$lib/assets/sugar-cookies.jpeg";

</script>

<section id="categories">
    <div class="container">
        <h2>What I Make</h2>
        <div class="auto-grid" style="--grid-size: 400px;">
            <BlogCard src={flower} alt="Drawing of a flower." imgY="25%" cardTitle="Artwork" cardDescription="From drawing, to painting, to coloring. I love getting into fine arts!" />
            <BlogCard src={crochet} alto="Hand crochet." cardTitle="Fiber Arts" cardDescription="I've been tying knots since before I can remember. I love a good fabric or yarn project!"/>
            <BlogCard src={cookies} alt="Sugar cookies." cardTitle="Cooking" cardDescription="Cooking things is like a fun science project that you get to eat afterwards. Count me in!"/>
            <BlogCard src={snowman} alt="Snowman." cardTitle="Builds" cardDescription="I love making all kinds of things. Scluptures, Legos, science kits...it's all good fun!"/>
        </div>
    </div>
</section>


<style>

</style>