<script lang="ts">
    let s:string
    const handleInput = (e:any) => { //I have no idea what on:input returns
        s = e.target.value
    }


</script>

<main>
    <input type = "text" on:input = {handleInput}>
</main>