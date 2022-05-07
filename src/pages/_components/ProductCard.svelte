<script>

</script>

<style>
.product-container{
    padding: 0 10vw; 
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
}

.product-container::-webkit-scrollbar{
    display: none;
}

.product-card{
    flex: 0 0 auto;
    width: 250px;
    height: 500px;
    border-radius:30px;
    margin-right: 40px;
    background-color: #F1F1F1;
    align-items: center;
    margin: 20px;
    padding: 20px;
}

.product-image{
    position: relative;
    width: 100%;
    height: 350px;
    overflow: hidden;
}

.product-thumb{
    width: 100%;
    height: 250px;

}

.card-btn{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 90%;
    text-transform: capitalize;
    border: none;
    outline: none;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
}


.product-info{
    width: 100%;
    height: 100px;
    padding-top: 10px;
}

.product-brand{
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
}

.product-short-des{
    width: 100%;
    /* height: 20px; */
    overflow: hidden;
    text-transform: capitalize;
    /* margin: 5px 0; */
    text-align: center;
}

.actual-price{
    /* margin: 50px; */
    padding: 0px 100px 0px 100px;
    font-size: 20px;
    background-color: rgb(90, 141, 90);
    color: white;
    position: absolute;
    border-radius: 20px;
    text-align: center;
}
.title{
  font-size:30px;
  text-align: center;

  }
 
</style>
<h1 class="title">🤑 Selling Products</h1>
  <div class="product-container">
    <div class="product-card">
        <div class="product-image">
            <img src="/phone.jpg" class="product-thumb" alt="">
            <button class="card-btn">Edit Offer</button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">Xiaomi Headphones</h2>
            <p class="product-short-des">Used Product</p>
            <p class="product-short-des">+33 06 31 13 16 15 - Tassia</p>
            <span class="actual-price">$20</span>
        </div>
  </div>
</div>