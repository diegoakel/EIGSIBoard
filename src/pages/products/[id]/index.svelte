<script>
  import NavBar from '../../_components/NavBar.svelte'
  import NewsCard from '../../_components/NewsCard.svelte'
  export let id
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

</style>

<NavBar/>

<div class="container">
  <h1>⚛️ {id}</h1>
  {#each new Array(3) as item, id}
    <NewsCard />
  {/each}

</div>
