import React from 'react';

import './Message.scss'

export default function Message({name, msg:{user, text}}){
    
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();

    if(user === trimmedName){
        isSentByCurrentUser = true;
    }
    return(
        <>
        {
            isSentByCurrentUser ? 
            (
                <div className="message-container message-container__end">
                    <p>{trimmedName} dice:</p>
                    <div className="message-container__end-box">
                        <p>{text}</p>
                    </div>
                </div> 
            ):
            (
                <div className="message-container message-container__start">
                <p>{user} dice:</p>
                <div className="message-container__start-box">
                    <p>{text}</p>
                </div>
            </div>
            )
        }
        </>
    )
}