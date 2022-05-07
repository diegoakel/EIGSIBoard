<script>
    import { metatags } from '@roxi/routify'
    import { url } from "@roxi/routify";
    import NavBar from "./_components/NavBar.svelte";
    import Card from "./_components/Card.svelte";

    
    metatags.title = 'EIGSI Board'
    metatags.description = 'The ONE board for every EIGSI student'
</script>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        max-width: 1200px;
    }
</style>

<NavBar />
<h1>Welcome to the EIGSI Board!</h1>
<p>We help you to find you intership and sell or buy used products from another students!</p>

<div class="container">
    <Card color="#278E6F" title="Jobs" link="./jobs"/>
    <Card color="#27318E" title="Products" link="./products"/>
</div>