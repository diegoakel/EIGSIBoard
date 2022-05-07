<script>
    import { url } from "@roxi/routify";
    export let color
    export let title
    export let link

</script>

<style>
.card{
    color: white;
    background-color: var(--color);
    font-size: 71px;
    width: 350px;
    height: 450px;
    border-radius: 30px;
    text-align: center;
    margin: 50px;
    line-height: 300px;
}

a { 
    text-decoration: none;
}
.card:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.7); 
}

</style>

<a href={$url(link)}>
    <div class="card" style="--color:{color};">
      {title}
  </div>
</a>