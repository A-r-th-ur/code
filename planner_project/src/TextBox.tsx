import { useState} from 'react';


const TextBox = ({}) =>{
    const [inputText, setInputText] = useState('');//two way binds it to the textbox
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
      };//this one adds the typed text into the textbox

    return(
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />    
        </div>
    )
}

export default TextBox;