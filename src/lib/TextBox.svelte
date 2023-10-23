<script>
	import { currentUser, pb } from "./auth";

    let inputText = 'type something!'

    async function addTask(){
        console.log('pressed')
        if($currentUser){
            const data = {
            "task_name": inputText,
            "user_id" : $currentUser.id
            };
            await pb.collection('Tasks').create(data);
        }
    }   
</script>

<div>
    <span>
        <input type = 'text' bind:value={inputText}>
    </span>
    <button on:click={addTask}>submit</button>
</div>














































