
<script>
    import '../app.css'
	import { goto } from "$app/navigation";
	import { currentUser } from "$lib/auth";
	import { onMount } from "svelte";

    


    onMount(() => {
        if(!$currentUser){
            goto("/login")
        }
        else{
            goto("/")
        }

    })
</script>



<slot></slot>