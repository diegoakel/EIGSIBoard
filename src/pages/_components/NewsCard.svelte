<script>
    import { supabase } from "../../lib/supabaseClient";
    
    let _delete = async(id) => {
        let { data, error } = await supabase
        .from("news")
        .delete()
        .match({id: id})

        location.reload();
    }
    
    let like = async (id) => {
        let button = document.getElementById(id);
        if (button.innerHTML == "🤍"){
            button.innerHTML = "❤️";
            numLikes += 1;
        } else {
            button.innerHTML = "🤍";
            numLikes -= 1;
        }

        const { data, error } = await supabase
        .from('news')
        .update({ likes: numLikes })
        .match({ id: id })
    }

    export let _new
    let numLikes = _new.likes
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
        cursor: pointer;
    }

</style>

<div class='all'>
        <div  style="float:left;padding-left: 20px;">
            <p> <strong>{_new.author}</strong> - {_new.created_at.substring(0,10)}</p>
            <br/>
            <p>{_new.text}</p> 
            <br/>
            <button class="delete" on:click={_delete(_new.id)}>🗑️</button>
            <button id = {_new.id} on:click={like(_new.id)} >🤍</button> {numLikes}
            <br/>
            <h4 class="card">{_new.tag}</h4> 
        </div>
</div>