<script>
    import { metatags } from '@roxi/routify'
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
    .span-title{
        display:inline-block;
        color:#263286;

    }

</style>

<NavBar />

<div class="wrapper">
    <h1 class="title">👋 Welcome to the <span class="span-title">Entreprise du Futur</span> Board</h1>
    <h2 class="title">Share with your friends important stuff</h2>
</div>

<div class="container">
    <Card emoji="🎒" title="Job"/>
    <Card emoji="📚" title="Subjects News"/>
</div>