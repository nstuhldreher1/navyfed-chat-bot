import './TextBox.css'
import enterSVG from '../assets/enter.svg'
import { useState } from 'react';
import { createContext, useContext } from 'react';
import {TextBoxContext} from '../contexts/TextBoxContext';
import axios from 'axios';
import Response from './Response.jsx'

function TextBox(){
    const [inputValue, setInputValue] = useState('');
    const {setResponse} = useContext(TextBoxContext);
    const {setRequest} = useContext(TextBoxContext);
    const {setLoading} = useContext(TextBoxContext);

    const handleSubmit = () => {
        console.log('Submitted:', inputValue);
        
        setLoading(true);
        const request = {
            question: inputValue
        }

        //TODO add submission Logic
        axios.post('https://flask-server-chatbot1-07d5acea7483.herokuapp.com/query', request)
            .then(response => {
                console.log('Response:', response.data);
                setLoading(false);
                setRequest(inputValue);
                setResponse(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
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
                        placeholder='Question then press Enter'
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <img src = {enterSVG} alt= "enter"></img>
                </div>
        </div>
    );
}

export default TextBox;