<script>

</script>

<style>
  * {box-sizing: border-box;}

main { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

img {  
max-width: 50%;  
height: auto;  
}  

.header {
  overflow: hidden;
  /* background-color: #f1f1f1; */
  /* padding: 20px 10px; */
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header-right a{
  background-color: #004489;
  color: white;
  margin-right: 100px;
  width: 200px;
  margin-top: 22px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: right;
    text-align: center;
  }
}
 
</style>
<main>
<div class="header">
  <a href="/" class="logo">
    <img src="/eigsi.png" alt="Logo of EIGSI">
  </a>

  <div class="header-right">
    <a href="/jobs">👀 All Jobs</a>
    <a href="/products">👀 All Materials</a>
  </div>
</div>
</main>