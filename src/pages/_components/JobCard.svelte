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

    h1, h3 { 
        margin: 0 auto;
        float:left;
    }

    img { 
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .all {
        /* display: block; */
        padding: 5px;
        width: 100%;
        background-color: var(--color);
        margin-top: 10px;
        border-radius: 20px;
    }
    .wrapper{
        padding-left: 20px;
    }
    .all a{
        color: black;
        text-decoration: none;
    }
</style>

<div class='all' style='--color:{color};'>
    
    <a href="www.google.com">
        <div style="float:left;"><img src="/eigsi.png" alt=""></div>
        <div  style="float:left;" class="wrapper" >
            <h1>Hojentropia</h1> <br/>
            <h3>Backend developer</h3> <br/>
            <h3>Remote</h3> <br/>
        </div>
    </a>

</div>