<script>
    let shown = false;
    export function show() {
      shown = true;
    }
    export function hide() {
      shown = false;
    }
    let name = '';
    let logourl ='';
	let stagetype = 1;
  </script>
  
  <style>
    .modal-wrapper {
      background-color: rgb(0, 0, 0);
      background-color: rgba(0, 0, 0, 0.6);
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  
    .modal {
      background-color: white;
      max-width: 80vw;
      padding: 1rem;
      margin: 15% auto;
    }
    .close {
      float: right;
      cursor: pointer;
    }
    .close:hover {
      font-weight: bold;
    }
  </style>
  
  <svelte:window
    on:keydown={e => {
      if (e.keyCode == 27) {
        hide();
      }
    }} />
  
  {#if shown}
    <div class="modal-wrapper">
      <div class="modal">
        <span class="close" on:click={() => hide()}>&times;</span>
        <slot />
        <h1>Add a new Job Offer:</h1>
        <input bind:value={name} placeholder="Company Name">
        <input bind:value={logourl} placeholder="Logo URL">
        <h2>Contract Type</h2>
        <label>
        	<input type=radio bind:group={stagetype} value={1}>
        	Stage
        </label>
        <label>
        	<input type=radio bind:group={stagetype} value={2}>
        	Alternance
        </label>
        <label>
        	<input type=radio bind:group={stagetype} value={3}>
        	CDI
        </label>
      </div>
    </div>
  {/if}
  