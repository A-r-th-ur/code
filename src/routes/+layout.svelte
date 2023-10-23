
<script>
    import '../app.css'
	import { goto } from "$app/navigation";
	import { currentUser } from "$lib/auth";
	import { onMount } from "svelte";

    


    onMount(() => {
        if(!$currentUser){
            goto("/a-r-th-ur.github.io/login")
        }
        else{
            goto("/a-r-th-ur.github.io")
        }

    })
</script>



<slot></slot>