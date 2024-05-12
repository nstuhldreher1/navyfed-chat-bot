import './TextBox.css'
import enterSVG from '../assets/enter.svg'
import { useState } from 'react';
import axios from 'axios';

function TextBox(){
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState('');
    const [request, setRequest] = useState('');

    const handleSubmit = () => {
        console.log('Submitted:', inputValue);
        
        setRequest(inputValue);
        
        const request = {
            question: inputValue
        }
        
        //TODO add submission Logic
        axios.post('http://127.0.0.1:5000/query', request)
            .then(response => {
                console.log('Response:', response.data);
                setResponse(response)
            })
            .catch(error => {
                console.error('Error:', error);
            });

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