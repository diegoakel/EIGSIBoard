<script>
    import { supabase } from "../../lib/supabaseClient";
  
    export function show() {
      shown = true;
    }
    export function hide() {
      shown = false;
    }

    let insert_data = async() => {
      const { data, error } = await supabase
      .from('jobs')
      .upsert({ 
        id: id, 
        company: company,
        logourl:logourl,
        title: title,
        offerurl:offerurl,
        skills:skills,
        salary: salary,
        joblevel:joblevel,
        place:place })     

      hide()
      location.reload()
    }

    let shown = false;
    export let id
    export let job ='';
    export let company
    export let logourl
    export let title
    export let offerurl
    export let skills
    export let salary='';
    export let joblevel='';
    export let place='';
    let modaltitle ='🚀 Add a new Job Offer:'
    let buttontitle ='Submit'
    
    let salarys = [
    'Less than €500',
    '€500 - €700',
    '€700 - €900',
    '€900 - €1.100',
    'More than €1.100'
  ]
  let places = [
    'Remote',
    'Presential',
    'Hybrid'
  ]
  let joblevels = [
    'CDI',
    'Alternance',
    'Stage'
  ]

  if (job != '') {
    id = job.id
    company = job.company;
    logourl = job.logourl;
    title = job.title;
    offerurl = job.offerurl;
    skills = job.skills;
    joblevel = job.joblevel;
    place = job.place;
    salary = job.salary;
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
    select {
      width: 100%;
    }
    p { 
      margin: 0px;
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
        
        <form on:submit|preventDefault={insert_data}>
        <h1>{modaltitle}</h1>
        <p>🤑 General Information<p>
        <input class ="input-modal"bind:value={title} placeholder="Job Title" required>
        <input class ="input-modal" bind:value={company} placeholder="Company" required>
        <input class ="input-modal" bind:value={offerurl} placeholder="Linkedin URL" required>
        <input class ="input-modal" bind:value={logourl} placeholder="Company Logo URL" required>
        <input class ="input-modal" bind:value={skills} placeholder="Needed skills separated by ;" required>
        <p>🤑 Contract Type<p>

         <select bind:value= {joblevel} required>
           {#each joblevels as _joblevel}
           <option value={_joblevel}>{_joblevel}</option>
           {/each}
         </select>

        <p>🤑 Type of Work</p>
        <select bind:value= {place} required>
          {#each places as _place}
          <option value={_place}>{_place}</option>
          {/each}
        </select>

        <p>🤑 Salary</p>
        <select bind:value= {salary} required>
          {#each salarys as _salary}
          <option value={_salary}>{_salary}</option>
          {/each}
        </select>
        <button type ='submit'>{buttontitle}</button>
      </form>
      </div>
    </div>
  {/if}
