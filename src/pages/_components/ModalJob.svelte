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
    let title ='';
    let offerurl ='';
	let stagetype = 1;
  let worktype = 1;

	let selected;
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
      display: block;
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
        <input bind:value={title} placeholder="Job Title">
        <input bind:value={offerurl} placeholder="Linkedin URL">
        <input bind:value={name} placeholder="Company Name">
        <input bind:value={logourl} placeholder="Company Logo URL">
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
        <h2>Type of Work</h2>
        <label>
        	<input type=radio bind:group={worktype} value={1}>
        	Presential
        </label>
        <label>
        	<input type=radio bind:group={worktype} value={2}>
        	Remote
        </label>
        <label>
        	<input type=radio bind:group={worktype} value={3}>
        	Hybrid
        </label>
        <h2>Salary</h2>
        <select>
          <option value="0">Select a Salary Range</option>
          <option value="1">> €500</option>
          <option value="2">€500 - €700</option>
          <option value="3">€700 - €900</option>
          <option value="4">€900 - €1.100</option>
          <option value="5">> €1.100</option>
        </select>
      </div>
    </div>
  {/if}
  