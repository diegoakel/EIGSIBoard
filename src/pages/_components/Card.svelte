<script>
    export let title
    export let emoji
    import Modal from "./Modal.svelte";
    let modal;
</script>

<style>
.card{
    color: white;
    padding: 20px;
    background-color:#263286;
    font-size: 50px;
    width: 350px;
    height: 350px;
    border-radius: 30px;
    text-align: center;
    margin: 50px;
    justify-content: space-between;
}
.card-title{  
  font-size: 40px;
 
}
.emoji{  
  font-size: 50px;
}

.Add-btn{
  display:block;
  margin: 0 auto;
  border-radius: 30px;
  color:#263286;
  background-color: #6EBD8F;
  text-align: center;
  font-size: 15px;
  padding: 5px;
  width: 50%;
  font-weight: bold;
}
.Add-btn:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.7); 
}


</style>


<div class="card">
    <h1 class="emoji"> {emoji}</h1>
    <h1 class="card-title"> {title}</h1>
    <button class= "Add-btn"  on:click={() => modal.show()}>Add New</button>
</div>

<Modal bind:this={modal}>
  <!-- <h2>Modal title</h2>
  <p>Modal content.</p>
  <button class= "Close-btn" on:click={() => modal.hide()}>Close</button> -->
</Modal>