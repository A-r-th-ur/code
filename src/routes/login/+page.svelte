<script lang>
	import { goto } from "$app/navigation";
	import { currentUser, pb } from "$lib/auth";
    /**
	 * @type {string}
	 */
    let username
    /**
	 * @type {string}
	 */
    let password

    async function login(){
        try{
        await pb.collection('users').authWithPassword(username, password)
        if($currentUser){
           goto("/a-r-th-ur.github.io")
        }
        }
        catch{
            console.log("authentication failed");
        }
    }




	function signUpRedirect() {
		goto("/a-r-th-ur.github.io/signup")
	}
</script>

<h1 class = "underline">Planner App</h1>
<form on:submit|preventDefault>
    <input placeholder="Username" type="text" bind:value={username}/>
    <input placeholder="Password" type="password" bind:value={password}/>
    <button on:click={login}>Log In</button>
    <button on:click={signUpRedirect}>Sign Up</button>
</form>