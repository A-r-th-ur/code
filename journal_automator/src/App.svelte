<script lang="ts">
    //this file is the initiator of all states in the app
    import TextBox from "./lib/TextBox.svelte";

    //import all content types
    
    
    //handle text input
    let baseText: string;  
    const baseTextSetter = (evt: any) => {
    baseText = evt.target.value;
  
    //handle translation to dynamic component list
    import type SvelteComponent from 'svelte';
    let listOfContent: any[]; //should be type of sveltecomponent but typescript is not happy about it
    const addToContentList = (content: any/*typeof SvelteComponen*/) => {
      listOfContent.push(content);
    }



  }
  
</script>

<main>
  <TextBox handleInput = {baseTextSetter}/>
    {#each listOfContent as ,}
    {/each}

  
</main>

<style>
  
</style>
