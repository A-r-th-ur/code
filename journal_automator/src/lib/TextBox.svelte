<script lang="ts">
    //this file deals only with displaying the form. the data is passed to top.
    export let handleInput;
    
</script>

<form>
    <input type = "text" placeholder="Write Something" on:input = {handleInput}/>
</form>