<script>
  import NavBar from "../_components/NavBar.svelte";
  import SubjectsCards from "../_components/SubjectsCards.svelte";
  let subjects = [
    {id: 1, title:'Python', image: 'https://www.panggi.com/images/featured/python.png'},
    {id: 2, title:'WebDev', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/488f115d-6e44-4ccd-b238-b2699af64966/d7bmuby-04d917d9-1cee-4f57-8296-ec8b7f0d2d1f.jpg/v1/fill/w_1600,h_900,q_75,strp/web_developer_wallpaper__white__by_plusjack_d7bmuby-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvNDg4ZjExNWQtNmU0NC00Y2NkLWIyMzgtYjI2OTlhZjY0OTY2XC9kN2JtdWJ5LTA0ZDkxN2Q5LTFjZWUtNGY1Ny04Mjk2LWVjOGI3ZjBkMmQxZi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.aDA41qJciYPZWWEIE_chmCMFsYL2mxzVVZxe1aVui3A'},
    {id: 3, title:'Networks', image: 'https://ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com/optimized/2X/1/19a97b1db5709c9a0cdaf408adfcc1b3325c74c6_2_690x388.jpeg'},
    {id: 4, title:'Excel', image: 'https://cdn.eduonix.com/assets/images/header_img/2019022215330111057.jpg'},
    {id: 5, title:'Lean', image: 'https://cdn.thefabricator.com/a/how-automation-and-lean-manufacturing-go-together-1618511878.jpg?size=1000x'},
    {id: 6, title:'SAP', image: 'https://images.assetsdelivery.com/compings_v2/olegkachura/olegkachura2011/olegkachura201100521.jpg'},
    {id: 7, title:'Digitalisation', image: 'https://media.istockphoto.com/photos/digitalization-concept-human-finger-pushes-touch-screen-button-and-picture-id1226549694?k=20&m=1226549694&s=612x612&w=0&h=Df7UDFdqNFyj8logALTdfTM0unMRwSimGbIqkWPNVcc='}
  ]

</script>
<style>
    .cards-list {
  z-index: 0;
  width: 70%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  right: 0; 
  margin: auto;
  
}
h1 {
  text-align: center;
}

</style>
<NavBar />
<h1>🚀 See All News by Subject</h1>
<div class="cards-list">
  
{#each subjects as item (item.id)}
<SubjectsCards  title={item.title} bgimage={item.image}/>
{/each}
</div>