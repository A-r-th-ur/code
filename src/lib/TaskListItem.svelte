<script>
	import { onMount } from "svelte";
	import { pb } from "./auth";

    /**
    * @type {string}
    */
    export let taskId;

    /** when the server updates this prop is updated, which makes the input field update. then, when the input is submitted, 
    * @type {string}
    */
    export let taskName;


    //onMount(() => console.log(`${taskName} and ${inputTaskName}`))//this proves that the props are successfullly passed in

    /**
	 * @type {string}
	 */
    let inputTaskName;
    $: inputTaskName = taskName;
    async function updateItem(/** @type {string} */ taskId, /** @type {any} */ taskName,/** @type {string} */ inputTaskName){
        
        if(taskName === inputTaskName){
           return; //do nothing if no change 
        } 
        if(inputTaskName === ''){
            await pb.collection('Tasks').delete(taskId);

        } ; //delete if empty

        const data = {
        "task_name": inputTaskName,
        };
        const record = await pb.collection('Tasks').update(taskId, data);
    }

    
    /**
	 * @type {HTMLInputElement}
	 */
    let inputElement;


</script>

<div class="flex">
    <form on:submit|preventDefault={() => { console.log("submitted"); inputElement.blur();}}> <!-- for getting submit event when pressing enter -->
       <input type="text" bind:this={inputElement} bind:value={inputTaskName} on:blur={() => updateItem(taskId, taskName, inputTaskName)} /> 
    </form>
    
    <button on:click={async ()=>{
        await pb.collection('Tasks').delete(taskId);
    }}>
        remove
    </button>
</div>