<script>
    export let data;
    // console.log(data);

    $: ({ episode, user } = data);
    // console.log(episode);
    // console.log(episode.title);
</script>

<h1>{user.email}</h1>

{#if data && data.episode}
    <h1>{data.episode.title}</h1>
    {@html episode.show_notes}

{/if}
