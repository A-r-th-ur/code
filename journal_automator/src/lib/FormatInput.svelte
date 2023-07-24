<script lang="ts">

    let input;
    const handleInput = (evt) => {
        input = evt.target.value;
    }
    

</script>

<form>
    <input type = "text" placeholder="Write Something" on:input = {handleInput}/>
</form>