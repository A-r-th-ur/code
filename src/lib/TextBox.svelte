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

<div class="flex">
    <input class="border-2 border-green-500" type = 'text' bind:value={inputText}>
    <button class=" ml-2 border-2 border-green-500"  on:click={addTask}>submit</button>
</div>














































