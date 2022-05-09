<script>
  import NavBar from '../_components/NavBar.svelte'
  import JobCard from '../_components/JobCard.svelte'
  import { onMount } from "svelte";
  import { supabase } from "../../lib/supabaseClient";
  
  onMount(async () => {
    let { data, error } = await supabase
      .from("jobs")
      .select("*")
    if (error) {
      return (errorMessage = error.message);
    }
    jobs = data
  });

  let jobs = null;
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
  <h1>💼 Open job opportunities</h1>

  {#if jobs}
  {#each jobs as job (job.id)}
    <JobCard {job}/>
  {/each}
  {:else}
  <p>Loading, please wait ⌛</p>
  {/if}
</div>