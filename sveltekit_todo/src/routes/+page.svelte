<script>

	import { goto } from "$app/navigation";
	import Tasklist from "$lib/Tasklist.svelte";
    import { currentUser, pb } from "$lib/auth";
    
    function logOut(){
        pb.authStore.clear();
        goto("/login")
    }

    

    
</script>

<h1>Planner App</h1>
{#if $currentUser}
    <p>Signed in as {$currentUser.username}</p>
    <Tasklist />





{/if}
<button on:click={logOut}>Log Out</button>


