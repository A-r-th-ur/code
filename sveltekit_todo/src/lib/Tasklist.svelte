<script>
	import { onMount, onDestroy } from "svelte";
	import { pb } from "./auth";
    
    /**
	 * @type {any[]}
	 */
    let content = []

    onMount(async () => {
        const resultList = await pb.collection('Tasks').getList(1, 50, {
            sort: 'created',
        });
        content = resultList.items;
    });
    
</script>

<div class = 'list'>
    {#each content as item(item.id)}
        <p class = 'task'>{item.task_name}</p>
        <button class = 'checkBox'>remove</button>
    {/each}
</div>


<style>

    .checkBox , .task {
        display: inline-block;
    }

</style>
