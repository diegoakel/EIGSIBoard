<script>
    let shown = false;
    export let job = ''
    export function show() {
      shown = true;
    }
    export function hide() {
      shown = false;
    }

    export let name = '';
    export let logourl ='';
    export let title ='';
    export let offerurl ='';
    export let skills ='';
    export let stagetype = 1;
    export let worktype = 1;
    let modaltitle ='🚀 Add a new Job Offer:'
    let buttontitle ='Submit'
    
    

    if (job != '') {
      name = job.name;
      logourl = job.logourl;
      title = job.title;
      offerurl = job.offerurl;
      skills = job.skills;
      stagetype = job.stagetype;
      worktype = job.worktype;
      modaltitle = '✍️ Edit Job Offer:';
      buttontitle ='Save Changes'
    }

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
      padding: 2rem;
      margin: 2% auto;
      display: block;
      height: 80%;
      overflow:scroll;
      overflow-x:hidden;
    }
    .close {
      float: right;
      cursor: pointer;
      font-size:30px;
    }
    .close:hover {
      font-weight: bold;
      color: red;
    }
    .input-modal {
   background-color: white;
   background-position: 10px 10px;
   display:block;
   width: 100%;
   font-size: 15px;
    }
    button {
      display:block;
      width: 20%;
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
        <h1>{modaltitle}</h1>
        <p>🤑 General Information<p>
        <input class ="input-modal"bind:value={title} placeholder="Job Title">
        <input class ="input-modal" bind:value={name} placeholder="Company Name">
        <input class ="input-modal" bind:value={offerurl} placeholder="Linkedin URL">
        <input class ="input-modal" bind:value={logourl} placeholder="Company Logo URL">
        <input class ="input-modal" bind:value={skills} placeholder="Needed skills separated by ;">
        <p>🤑 Contract Type<p>
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
        <p>🤑 Type of Work</p>
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
        <p>🤑 Salary</p>
        <select>
          <option value="0">Select a Salary Range</option>
          <option value="1">> €500</option>
          <option value="2">€500 - €700</option>
          <option value="3">€700 - €900</option>
          <option value="4">€900 - €1.100</option>
          <option value="5">> €1.100</option>
        </select>
        <button>{buttontitle}</button>
      </div>
    </div>
  {/if}
  