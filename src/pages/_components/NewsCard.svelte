<script>
    let colors = [
        "#6EF9F5",
        "#63E2C6",
        "#5ABCB9",
        "#399E5A",
        "#1997BA"
    ]

    // Pick random color
    const color = colors[Math.floor(Math.random() * colors.length)];
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
        /* display: block; */
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

</style>

<div class='all' style='--color:{color};'>
    
    <!-- <a href="www.google.com"> -->

        <!-- <div style="float:left;"><img src="/hojentropia.png" alt=""></div> -->
        
        <div  style="float:left;padding-left: 20px;">
            <p> <strong>Diego Akel </strong>-  07/05/2022</p>
            <br/>
            <p>The teacher just said theres a Site to deliver to next week</p> 
            <br/>
            <p>🤍 5</p> 
            <br/>
            <h4 class="card">Homework</h4> 
        </div>

        <!-- <div  style="float:right;" class="tech">
            <p></p><br/>
            <h4 class="card">Python</h4> 
            <h4 class="card">Git</h4> 
            <h4 class="card">Javascript</h4>
            <br/>
        </div> -->
    <!-- </a> -->

</div>