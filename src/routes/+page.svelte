<script>
    import { navigating, page, updated, getStores } from '$app/stores';
    import Test from '$lib/Test.svelte';
    import '$db/start';
    export let data;

    $: console.log($navigating, $page);

    $: ({ latest_episode } = data)
    // const { latest_episode } = data;
    // console.log(latest_episode)
</script>

<h3>{latest_episode.title}</h3>
<!-- <h3>{latest_episode.html}</h3> -->
<!-- {@html latest_episode.html} -->

<Test />