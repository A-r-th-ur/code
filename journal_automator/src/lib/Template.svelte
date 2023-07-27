<script lang="ts">
    //this file deals only with displaying the form. the data is passed to top.
    //import { onMount, type ComponentType } from "svelte"; //use time of opening site
    import type { ComponentType } from "svelte";
    import DateSelector from "./content_types/DateSelector.svelte";
    import Duration from "./content_types/Duration.svelte";
    import Persist from "./content_types/Persist.svelte";
    import Text from "./content_types/Text.svelte";
    import TextInput from "./content_types/TextInput.svelte";
    import Time from "./content_types/Time.svelte";
    import Week from "./content_types/Week.svelte";



    //setup time stuff (timezone support is nonexistent in js)
    // const timeZone = 'Asia/Shanghai';
    // const options = { timeZone: timeZone, hour12: false };

    let time = new Date();;
    
	// these automatically update when `time`
	// changes, because of the `$:` prefix
	let currentTime = `${time.getHours()} : ${time.getMinutes()}`;

    let currentDate = `${time.getDate}`;

    function getWeekNumber(d) {
    // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        let yearStart:any = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        let weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        return [d.getUTCFullYear(), weekNo];
    }
    let weekNumber = getWeekNumber(new Date())[1];

//-----------------------------------------------------------------------------------------------------

    export let baseText;

    interface Content{
      type: ComponentType,
      defaultValue?: string | number,
      id: number
    }
    let listOfContent: Content[] = []; 
    const addToContentList = (content: Content) => {
      listOfContent.push(content);
    }
    const text_to_list = (input:string) =>{
        let componentID = 0;
        while(input.trim() !== ""){
            if(input.search(/</) === 0){
                let cutoff: number = input.search(/>/);
                if(cutoff > 0){
                    addToContentList({
                        type:TextInput,
                        defaultValue: input.substring(1, cutoff),
                        id:componentID
                    });
                    input = input.substring(cutoff + 1);
                }
            }
            else if(input.search(/\[/) === 0){
                let cutoff: number = input.search(/]/);
                if(cutoff > 0){
                    addToContentList({
                        type:Persist,
                        defaultValue: input.substring(1, cutoff),
                        id:componentID
                    });
                    input = input.substring(cutoff + 1);
                }

            }
            else if(input.search(/\/t /) === 0){
                addToContentList({
                    type:Time,
                    defaultValue: currentTime,
                    id:componentID
                });
                input = input.substring(input.search(/\S/) + 1);
            }
            else if(input.search(/\/d /) === 0){
                addToContentList({
                    type:DateSelector,
                    defaultValue: currentDate,
                    id:componentID
                });
                input = input.substring(input.search(/\S/) + 1);
            }
            else if(input.search(/\/w /) === 0){
                addToContentList({
                    type:Week,
                    defaultValue: weekNumber,
                    id:componentID
                });
                input = input.substring(input.search(/\S/) + 1);

            }
            else if(input.search(/\/p /) === 0){
                addToContentList({
                    type:Week,
                    defaultValue: 0,
                    id:componentID
                });
                input = input.substring(input.search(/\S/) + 1);
            }
            else{
                let cutoff: number = input.search(/<|\[|\//);
                addToContentList({
                    type:Text,
                    defaultValue: input.substring(0,cutoff),
                    id:componentID
                });
                input = input.substring(cutoff);
            }

            componentID++;

        }
            


            
        
    }
    $: text_to_list(baseText);

    
    
</script>

<div>
    {#each listOfContent as item (item.id)}
    <item.type/>
    {:else}
    <p>There is nothing to render!</p>
    {/each}
</div>