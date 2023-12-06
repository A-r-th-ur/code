<script>
	import { onMount, onDestroy } from "svelte";
	import { pb } from "./auth";
	import TextBox from "./TextBox.svelte";
	import TaskListItem from "./TaskListItem.svelte";
    import crudFuncs from "./crudFuncs.js";

    /**
	 * @type {string|undefined}
	 */
     export let parentTask;
    

     /**
	 * @type {boolean}
	 */
      export let visible;
      
    /** How to fucking interface this shit
	 * @type {any[]}  
	 */
    let content = []

    onMount(async () => 
    {
        /* const resultList = await pb.collection('Tasks').getList(1, 50, { 
            sort: 'created',
            filter: `parent_id = ""`,
            requestKey: null  
        }); */
        const resultList = crudFuncs.getTasks()
        content = resultList.items;
        console.log(content)


        pb.collection('Tasks').subscribe('*', function (e) {
            if(e.record.parent !== parentTask){
                console.log(parentTask)
                console.log(e.record.parent)
                
                return; //continue if on task
            } 
            
            if(e.action === 'create'){
                content = [...content, e.record]
            }
            if(e.action === 'delete'){
                content = content.filter((item) => {return(item.id !== e.record.id)})
            }
            if(e.action === 'update'){
                for (let i = 0; i < content.length; i++) {
                    if (content[i].id === e.record.id) {
                        content[i] = e.record;// Update the item with the matching ID
                        break; // Stop searching once the item is updated
                    }
                }
            }
        });
        
    });

    onDestroy(() =>{
        pb.collection('Tasks').unsubscribe();
    })
  

</script>
{#if (visible)}
    <h5>{parentTask || "root"}</h5>
    <TextBox/>
    <div>
        {#each content as item(item.id)}
        <div>
            <TaskListItem taskName={item.task_name} taskId={item.id}/>
        </div>
        {/each}
    </div>
{/if}