import './TextBox.css'
import enterSVG from '../assets/enter.svg'
import { useState } from 'react';

function TextBox(){
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = () => {
        console.log('Submitted:', inputValue);
        
        //TODO add submission Logic

        //delete value of input field once logic is done
        setInputValue('');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleSubmit();
        }
    };

    return(
        <div className="QuestionInputWrapper">
            <div className='InputOutline'>
                <input 
                    type = "text" 
                    value = {inputValue}
                    className='QuestionInput' 
                    placeholder='Question'
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <img src = {enterSVG} alt= "enter"></img>
            </div>
        </div>
    );
}

export default TextBox;