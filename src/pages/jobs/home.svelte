<script>
  import NavBar from '../_components/NavBar.svelte'
  import JobCard from '../_components/JobCard.svelte'

  let job = {
    name: 'Hojentropia',
    logourl: 'https://www.presse-citron.net/app/uploads/2020/06/Telecharger-Facebook.jpg',
    title: 'Backend Developer',
    offerurl: 'https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3064804447',
    skills: 'Python;Java;C', 
    stagetype: "Internship",
    worktype: 'Alternance',
    salary: "78k - $120k"
  }

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
    <JobCard {job}/>
  {/each}

</div>
