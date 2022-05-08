<script>
    import ModalJob from "./ModalJob.svelte";

    let colors = [
        "#6EF9F5",
        "#63E2C6",
        "#5ABCB9",
        "#399E5A",
        "#1997BA"
    ]

    // Pick random color
    const color = colors[Math.floor(Math.random() * colors.length)];

    let modal
    export let job
    let skills = job.skills.split(";")
    // export let name;
    // export let logourl;
    // export let title;
    // export let offerurl;
    // export let skills;
    // export let stagetype;
    // export let worktype;
</script>

<style>

    h1,p, h4{ 
        margin: 0 auto;
        float:left;
    }
    p{
        font-weight: 300;
    }
    h4 {
        font-size: 12px;
        display: block;
        text-align: left;
    }

    h1 { 
        font-size: 25px;
        padding: 0px 0px 6px 0px;
    }

    img { 
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .all {
        padding: 20px;
        width: 90%;
        background-color: var(--color);
        margin: 8px;
        border-radius: 20px;
    }
    .all:hover {
      transform: scale(0.99, 0.99);
      box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.25), 
        -2px -2px 4px 2px rgba(0,0,0,0.08);
    }

    .all a{
        color: black;
        text-decoration: none;
    }

    .card {
        background-color: white;
        border-radius: 10px;
        margin-right: 10px;
        padding: 3px;
    }

    .apply {
        padding:3px 15px 3px 15px;
        color:white;
        background-color:#3dfc03;
    }

    .tech {
        align-items: left;
    }
    .hiden {
      display: none;
      background: yellow;
      border-radius:50px;
      padding:3px 15px 3px 15px;
    }

    .all:hover .hiden {
      display: inline-block;
      color: black;
      text-align: right;
    }

    @media screen and (max-width: 900px) {
        .tech {
            display: none;
        }
        .all div{ 
            flex-direction: column;
            align-items: center;
        }

        img { 
            display: none;
        }
}

</style>

<button class='all' style='--color:{color};' on:click={() => modal.show()}>
        <div style="float:left;">
        <img src={job.logourl} alt=""></div>
        
        <div  style="float:left; align-items: left; padding: 0 0 0 10px">
            <p>{job.name}</p> 
            <br/>
            <h1>{job.title}</h1> 
            <br/>
            <div style="float:left">
            <h4 class="card">🌍 {job.worktype}</h4> 
            <h4 class="card">💰 ${job.salary}</h4> 
            <h4 class="card">📋 {job.worktype}</h4>
            </div>
            <a href={job.offerurl}>
                <h4 class="card apply">Apply</h4>
            </a>
            <h4 class ="hiden">✍️ Edit Offer</h4>
        </div>

        <div  style="float:right;" class="tech">
            <p></p><br/>
            {#each skills as item}
            <h4 class="card">{item}</h4>
            {/each}
            <br/>
        </div>

</button>

<ModalJob bind:this={modal} job = {job}/>