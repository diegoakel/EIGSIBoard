<script>
  import ModalJob from "./ModalJob.svelte";
  import ModalSubject from "./ModalNews.svelte";
  export let title;
  export let emoji;
  let modal;
</script>

<div class="card">
  <h1 class="emoji">{emoji}</h1>
  <h1 class="card-title">{title}</h1>
  <button class="Add-btn" on:click={() => modal.show()}>Add New</button>
</div>

{#if title == "Job"}
  <ModalJob bind:this={modal} />
{:else}
  <ModalSubject bind:this={modal} />
{/if}

<style>
  .card {
    color: white;
    padding: 20px;
    background-color: #263286;
    font-size: 50px;
    width: 350px;
    height: 350px;
    border-radius: 30px;
    text-align: center;
    margin: 50px;
    justify-content: space-between;
  }
  .card-title {
    font-size: 40px;
  }
  .emoji {
    font-size: 50px;
  }

  .Add-btn {
    display: block;
    margin: 0 auto;
    border-radius: 30px;
    color: #263286;
    background-color: #6ebd8f;
    text-align: center;
    font-size: 15px;
    padding: 5px;
    width: 50%;
    font-weight: bold;
  }
  .Add-btn:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.7);
  }
</style>
