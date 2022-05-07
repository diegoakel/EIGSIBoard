<script>
  import { url } from "@roxi/routify";
  import NavBar from '../_components/NavBar.svelte'
  import JobCard from '../_components/JobCard.svelte'
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
  {#each new Array(10) as item, id}
    <JobCard />
  {/each}

</div>
