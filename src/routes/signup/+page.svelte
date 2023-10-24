<script>
    import { goto } from "$app/navigation";
	import { currentUser, pb } from "$lib/auth";
    /**
	 * @type {string}
	 */
    let username;
    /**
	 * @type {string}
	 */
    let email;
    /**
	 * @type {string}
	 */
    let password;

    /**
	 * @type {string}
	 */
    let passwordConfirm;

    let hideError = true;
	async function signUp() {
		const data = {
            "username": username,
            "email": email,
            "password": password,
            "passwordConfirm": passwordConfirm
        };

        try{
            const record = await pb.collection('users').create(data);
            console.log("successfully created user")
            goto("/login")
        }
        catch(error){
            hideError = false
        }
        
	}
</script>

<div>
    <input placeholder="Username" type="text" bind:value={username}/>
    <input placeholder="Email" type="text" bind:value={email}/>
    <input placeholder="Password" type="password" bind:value={password}/>
    <input placeholder="Password Confirm" type="password" bind:value={passwordConfirm}/>
    <button on:click={signUp}>Sign Up</button>
    <p class = "text-red-600" class:hidden={hideError}>something went wrong</p>
</div>
