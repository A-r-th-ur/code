<script lang="ts">
    //this file is the initiator of all states in the app
    import TextBox from "./lib/TextBox.svelte";
    import type { SvelteComponent } from 'svelte'; //must import at the beginning, otherwise devastating bug due to shitty compile time error
    import Date from "./lib/content_types/Date.svelte";
    import Duration from "./lib/content_types/Duration.svelte";
    //import all content types
    
    
    //handle text input
    let baseText: string;  
    const baseTextSetter = (evt: any) => {
    baseText = evt.target.value;
  
    //handle translation to dynamic component list
     /*this is fucking stupid holy shit it only adds the end tag when I start to do it lmao
        /week is week#
        /date is date, default current date
        /time is time value, default current time
        <text> is for text with default value, 
        /duration is for period of time, default 7.75
        [persist] is for stored text with default value, and uses last time input for default value if not first time using
        
        
    */
    //Problem is that I have to dynamically generate all the components, and I don't think that anything in the template can be truly dynamic. 
    //current plan is: first dynamically generate a list of components... this would be easier in react.
    let listOfContent: typeof SvelteComponent[] = [
      Date,
      Duration
    ]; //should be type of sveltecomponent but typescript is not happy about it
    const addToContentList = (content: typeof SvelteComponent) => {
      listOfContent.push(content);
    }



  }
  
</script>

<main>
  <TextBox handleInput = {baseTextSetter}/>

  {#each listOfContent as item}
  {:else}
  {/each};

  
</main>

<style>
  
</style>
