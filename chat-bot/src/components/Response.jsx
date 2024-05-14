import { useContext } from "react";
import {TextBoxContext} from '../contexts/TextBoxContext'
import './Response.css'
function Response(){
    const {response} = useContext(TextBoxContext);
    const {request} = useContext(TextBoxContext);
    return(
        <div id = "ResponseContainer">
            <p className = "Response" id = "question">{request}</p>
            <p className = "Response" id = "chatBot">{response.response}</p>
        </div>        
    )
}

export default Response;