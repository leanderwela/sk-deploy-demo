<script>
    import { page } from '$app/stores'
    // $: console.log('page', $page);
</script>


<h2>Oops!</h2>
<h2>{$page.error?.status}</h2>
<h2>{$page.error?.message}</h2>