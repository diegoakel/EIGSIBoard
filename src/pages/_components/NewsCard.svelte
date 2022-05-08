<script>
    export let id
    let numLikes = 0

    let like = () => {
        let button = document.getElementById(id);

        if (button.innerHTML == "🤍"){
            button.innerHTML = "❤️";
            numLikes += 1;
        } else {
            button.innerHTML = "🤍";
            numLikes -= 1;
        }
    }
</script>

<style>

    p, h4{ 
        margin: 0 auto;
        float:left;
    }
    p{
        font-weight: 300;
    }
    h4 {
        font-size: 12px;
    }

    .all {
        padding: 5px;
        width: 90%;
        background-color: #aba4a431;
        margin-top: 10px;
        border-radius: 8px;
    }


    .card {
        background-color: white;
        border-radius: 10px;
        margin-right: 10px;
        padding: 3px;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }

</style>

<div class='all'>
        <div  style="float:left;padding-left: 20px;">
            <p> <strong>Diego Akel </strong>-  07/05/2022</p>
            <br/>
            <p>The teacher just said theres a Site to deliver to next week</p> 
            <br/>
            <button class="delete">🗑️</button>
            <button id = {id} on:click={like} >🤍</button> {numLikes}
            <br/>
            <h4 class="card">Homework</h4> 
        </div>
</div>