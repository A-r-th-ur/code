<script lang="ts">
    //this file deals only with displaying the form. the data is passed to top.
    //import { onMount, type ComponentType } from "svelte"; //use time of opening site
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
	$: currentTime = `${time.getHours()} : ${time.getMinutes()}`;



    export let baseText;

    interface Content{
      type: ComponentType,
      default?: string | Date | number,
      id: number
    }
    let listOfContent: Content[] = [

    ]; 
    const addToContentList = (content: Content) => {
      listOfContent.push(content);
    }
    const text_to_list = (input:string) =>{
        let componentID = 0;
        while(input.trim() !== ""){
            switch(input.charAt(0)){
                case "<":{
                    let cutoff: number = input.search(/>/)
                    addToContentList({
                        type:TextInput,
                        default: input.substring(1, cutoff - 1),
                        id:componentID
                    });
                    input = input.substring(cutoff + 1);
                    break;
                }
                case "[":{
                    let cutoff: number = input.search(/]/)
                    addToContentList({
                        type:Persist,
                        default: input.substring(1, cutoff - 1),
                        id:componentID
                    });
                    input = input.substring(cutoff + 1);
                    break;

                }
                case "/":{
                    switch(input.charAt(1)){
                        case "t":{
                            addToContentList({
                                type:Time,
                                default: "hello",
                                id:componentID
                            });

                        }
                        case "d":{

                        }
                        case "w":{
                            
                        }
                        case "p":{
                            
                        }

                    }
                }
                default:{
                    let cutoff: number = input.search(/<|\[|\//);
                    addToContentList({
                    type:"Text",
                    default: input.substring(0,cutoff),
                    id:componentID
                    });
                    input = input.substring(cutoff);
                    break;
                }

            }


            componentID++;

        }
            


            
        
    }
    $: text_to_list(baseText);

    
    
</script>

