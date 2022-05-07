<script>
    import { metatags } from '@roxi/routify'
    import { url } from "@roxi/routify";
    
    metatags.title = 'EIGSI Board'
    metatags.description = 'The ONE board for every EIGSI student'
</script>

<h1>Welcome to the EIGSI Board!</h1>
<p>We help you to find you intership and sell or buy used products from another students!</p>

<a class="card" href={$url('./jobs')}>See Jobs</a>
<br>
<a class="card" href={$url('./products')}>See E-commerce</a>