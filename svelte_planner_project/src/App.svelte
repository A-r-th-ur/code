<script lang="ts">
    let s:string = "defaultvalue"
    interface Obj{
        name: string;
        id: number;
    }
    let arr:Obj[] = [
        {name: "jac", id: 1}, 
        {name: "Tom", id: 2},
        {name: "Sam", id: 3}
    ]
    let dude:Obj = {name: "tester", id: 99}

    const handleInput = (e:any) => { //I have no idea what on:input returns
        s = e.target.value
    }
    const handleClick = (arr: Obj[]) =>{
        arr[0].name = "ryan"
        arr = arr;
        console.log("clicked");
        console.log(arr[0].name)
    }
    const handleClick2 = (person:Obj) =>{
        person.id = 100;
        person = person;
        console.log("button clicked")
        console.log(person.id)
    }
</script>

<main>
    <p>{s}</p>
    <input type = "text" on:input = {handleInput}/>
    <button on:click = {() => handleClick(arr)}>mybutton</button>
    <button on:click = {() => handleClick2(dude)}>mybutton2</button>
    <p>dude is {dude.name}, id is {dude.id}</p>
    {#each arr as item (item.id)}
        <p>name is {item.name}</p>
        <p>id is {item.id}</p>
    {/each}
</main>

<style>
  
</style>
