<script>
  import NavBar from '../../_components/NavBar.svelte'
  import NewsCard from '../../_components/NewsCard.svelte'
  import { onMount } from "svelte";
  import { supabase } from "../../../lib/supabaseClient";
  export let id

  let _news = null;

  onMount(async () => {
    let { data, error } = await supabase
      .from("news")
      .select("*")
      .eq('suject', id)
    if (error) {
      return (errorMessage = error.message);
    }
    _news = data
  });
  
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
  {#if _news}
  {#each _news as _new (_new.id)}
    <NewsCard {_new}/>
  {/each}
  {:else}
<p>Loading, please wait ⌛</p>
{/if}

</div>
