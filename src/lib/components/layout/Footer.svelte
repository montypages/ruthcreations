<script>
    import Button from "../ui/Button.svelte";
    import { goto } from "$app/navigation";

    let { categories } = $props();

</script>

<footer>
    <div class="container">
        <h3>Come back soon!</h3>
        <div class="flex-group flex-center">
            <Button onclick={() => {goto('/')}} btnText="Home" />
            <Button onclick={() => {goto('/about')}} btnText="About" />
            <Button onclick={() => {goto('/blog')}} btnText="Blog" />
            {#each categories as category}
                <Button onclick={() => {goto(`/blog/categories/${category.slug}`)}} btnText={category.name} />
            {/each}
        </div>
    </div>
</footer>


<style>
    footer {
        background-color: var(--clr-primary-dk-50);
        min-height: 200px;
        margin-top: 2rem;
        padding: 2rem 0 4rem 0;
    }

    h3 {
        text-align: center;
        line-height: 1;
    }
</style>