<script>
	import { goto } from "$app/navigation";
	import Tasklist from "$lib/Tasklist.svelte";
    import { currentUser, pb } from "$lib/auth";
    
    function logOut(){
        pb.authStore.clear();
        goto("/login")
    }

    

    
</script>

<h1 class ='text-blue-700 text-3xl p-2 border-b border-gray-100'>Planner App</h1>
{#if $currentUser}
    <p>Signed in as {$currentUser.username}</p>
    <div class='border-4'>
        <Tasklist />
    </div>
{/if}
<button on:click={logOut}>Log Out</button>


