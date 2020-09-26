import React from 'react';
import Message from '../Message'

import './Messages.scss';

export default function Messages({messages, name}){
    return(
        <div className="messages-container">
       { messages.map((msg,index)=>{
           return <div key={index}><Message msg={msg} name={name}/></div>
        })}
        </div>
    )
}