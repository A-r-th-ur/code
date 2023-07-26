<script lang="ts">
    //this file is the initiator of all states in the app
    import TextBox from "./lib/TextBox.svelte";
    import Template from "./lib/Template.svelte";
    
    //import all content types
    
    
    //handle text input
    let baseText: string;  
    const baseTextSetter = (evt: any) => {
      baseText = evt.target.value;
    }


    //current plan is: first dynamically generate a list of components  
    

</script>

<main>
  <TextBox handleInput = {baseTextSetter}/>
  
  {#if baseText}
  <Template {baseText} />
  {/if}

  
</main>

<style>
  
</style>
