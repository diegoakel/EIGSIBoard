<script>
  import { url } from "@roxi/routify";
  import NavBar from "../_components/NavBar.svelte";
  import ProductCard from "../_components/ProductCard.svelte";
</script>

<NavBar />
<ProductCard />

<!-- <div style="padding-top: 20px">
  <h1>All products being sold in EIGSI</h1>
</div> -->


<!-- {#each new Array(10) as item, id}
  <a class="card" href={$url('./:id', { id })}>
    <h3 class="item">{id}</h3>
  </a>
{/each} -->
