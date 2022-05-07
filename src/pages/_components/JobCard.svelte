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

    h1,p, h4{ 
        margin: 0 auto;
        float:left;
    }
    p{
        font-weight: 300;
    }
    h4 {
        font-size: 12px;
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

    .tech {
        align-items: left;
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

<div class='all' style='--color:{color};'>
    
    <!-- <a href="www.google.com"> -->

        <div style="float:left;">
        <img src="/hojentropia.png" alt=""></div>
        
        <div  style="float:left;padding-left: 20px;">
            <p>Hojentropia</p> 
            <br/>
            <h1>Backend developer</h1> 
            <br/>
            <h4 class="card">🌍 Remote</h4> 
            <h4 class="card">💰 $78k - $120k</h4> 
            <h4 class="card">📋 CDI</h4>
            <a href="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3064804447">
                <h4 class="card" style="padding:3px 15px 3px 15px;color:white;background-color:#3dfc03;">Apply</h4>
            </a>
        </div>

        <div  style="float:right;" class="tech">
            <p></p><br/>
            <h4 class="card">Python</h4> 
            <h4 class="card">Git</h4> 
            <h4 class="card">Javascript</h4>
            <br/>
        </div>
    <!-- </a> -->

</div>