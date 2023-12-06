<script>
	import { goto } from "$app/navigation";
	import Tasklist from "$lib/Tasklist.svelte";
    import { currentUser, pb } from "$lib/auth";
    import { writable } from "svelte/store";
    
    function logOut(){
        pb.authStore.clear();
        goto("/login")
    }



</script>

{#if $currentUser}
    <div class='flex'>
        <div class='border-2 border-violet-500 w-3/12 h-screen'> <!-- main task list -->
            <Tasklist parentTask={undefined} visible={true}/>
        </div>

        <div class='flex flex-col flex-1'> 


            <div class='flex flex-row-reverse w-full h-12 border-2 border-red-500'>  <!-- this is the nav bar -->
                <button class="mr-10" on:click={logOut}>Log Out</button>
                <span class="mr-10 mt-2">Signed in as {$currentUser.username}</span>

            </div>

            <div class="flex flex-1 w-full border-2 border-green-500">

                <div class='w-1/2 ml-auto border-2 border-yellow-500' > <!-- this is the middle box -->
                    <!-- <Tasklist parentTask={"test parent"} visible={true}/> -->
                </div>

                <div class='w-1/2 ml-auto border-2 border-violet-500' > <!-- this is the right box -->

                </div>
                
                
            </div>
            
        </div>
    </div>




{/if}



