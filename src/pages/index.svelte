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

    .wrapper{
        width: 100%;
        display: block;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
    .title{
        text-align: center;
    }

</style>

<NavBar />

<div class="wrapper">
    <h1 class="title">👋 Welcome to the Entreprise du Futur Board!</h1>
    <h2 class="title">Everything you need as a student</h2>
</div>

<div class="container">
    <Card color="#278E6F" emoji="🎒" title="Job" link="./jobs" img="/jobs.png"/>
    <Card color="#27318E" emoji="📚" title="Study Material" link="./products" img="/books.png"/>
</div>