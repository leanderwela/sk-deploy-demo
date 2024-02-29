<script>
    import {invalidateAll} from '$app/navigation';
    import {applyAction, deserialize} from '$app/forms';


    export let form;
    $: console.log('form', form);

    // standard onSubmit event
    async function handleForm(event) {
        // this === form element
        // creating form data
        const data = new FormData(this);
        //  sending our own fetch post request
        const res = await fetch(this.action, {
            method: 'POST',
            body: data
        });

        // get data by deserializing it
        const result = deserialize(await res.text());

        //  see if it was success
        // if success, reload all loaded data
        if(result.type === 'success') {
            // reloads all data
            await invalidateAll()
        }

        // populating form
        // will redirect if thrown redirect in action
        // show error page if thrown error
        applyAction(result);

    }
</script>

{#if form?.error_message}
    <p>
        {form.error_message}
    </p>
{/if}

{#if form?.message}
    <p>{form.message}</p>
{:else}
    <!-- <form use:enhance={( form, ) => {
        // form -> form element
        // data -> FormData object
        // action -> url form posts to
        // cancel() -> cancels form
        return ({result, update}) => {
            update();
            // result -> 'ActionResult'
            // update() -> runs all of the default use: enhance
        };
    }} 
    action="/contact?/email"
    method="POST"> -->
    <!-- Action = route + ?/ + action_name -->

    <form 
    on:submit|preventDefault={handleForm}
    action=" /contact?/email"
    >
        <label>
            Name: <input type="text" required name="name" id="name" />
        </label>
        <label>
            Email: <input type="email" required name="email" id="email" />
        </label>
        <label>
            Message: <textarea required name="message" id="message" />
        </label>
        <button type="submit">Send Email</button>
    </form>
{/if}

<style>
    form {
        padding: 20px;
        display: flex;
        gap: 40px;
        flex-direction: column;
    }

    label {
        display: block;
    }
</style>