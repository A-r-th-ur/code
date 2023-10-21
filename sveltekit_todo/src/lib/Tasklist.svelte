<script>
	import { onMount, onDestroy } from "svelte";
	import { currentUser, pb } from "./auth";
	import TextBox from "./TextBox.svelte";

    export let listName = 'defaultName';
    
    /** How to fucking interface this shit
	 * @type {any[]}  
	 */
    let content = []

    onMount(async () => 
    {
        const resultList = await pb.collection('Tasks').getList(1, 50, {
            sort: 'created',
        });
        content = resultList.items;


        pb.collection('Tasks').subscribe('*', function (e) {
            if(e.action === 'create'){
                content = [...content, e.record]
                console.log(e.record.id)
            }
            if(e.action === 'delete'){
                content = content.filter((item) => {return(item.id !== e.record.id)})
            }
        });

    });

    onDestroy(() =>{
        pb.collection('Tasks').unsubscribe();
    })
  

</script>

<h5>{listName}</h5>
<TextBox/>
<div>
    {#each content as item(item.id)}
    <div>
    <span>{item.task_name}</span>

    <button on:click={async ()=>{
        console.log(item.id);
        await pb.collection('Tasks').delete(item.id);
    }}>
        remove
    </button>
    </div>
    {/each}
</div>
