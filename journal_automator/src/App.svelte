<script lang="ts">
    import BaseTextProcessor from "./lib/BaseTextProcessor.svelte";
    import TextBox from "./lib/TextBox.svelte";

    let baseText: string;  
    const baseTextSetter = (evt: any) => {
    baseText = evt.target.value;
  }
  
</script>

<main>
  <TextBox handleInput = {baseTextSetter}/>
  <BaseTextProcessor {baseText}/>

  
</main>

<style>
  
</style>
