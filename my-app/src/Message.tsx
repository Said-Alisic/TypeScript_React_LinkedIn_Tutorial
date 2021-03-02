import React from 'react';

interface UserMessage {
    name: string;
    message: string;

} 


// Accept a prop,
// expect an interface 
// expect the component to return a type 
const Message = (props: UserMessage): any => {
    return (
        <div>
            <p>This is a quick message for testing!!!</p>  
            <p>{props.name}, {props.message}</p>
        </div>
        
    );
}

export default Message;

