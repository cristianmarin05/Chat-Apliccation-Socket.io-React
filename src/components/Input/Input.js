import React from 'react';


import './Input.scss';


export default function Input({setMessage,message,sendMessage}){
    return(
        <form className="form">
            <input 
                className="form__input"
                type="text"
                value={message}
                placeholder="Escribe un mensaje..."
                onChange={e=> setMessage(e.target.value)}
                onKeyPress={e=> e.key === "Enter" ? sendMessage(e) : null}
            />
            <button className="form__btn" onClick={e=>sendMessage(e)}>SEND</button>
        </form>
    )
}