import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import './Join.scss';


export default function Join(){

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');


    return(
        <div className="join-container">
            <div className="join-container__inputs">
                <h1>Chat con Socket.io</h1>
                <div><input placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/></div>
                <div><input placeholder="Sala" onChange={(e)=>setRoom(e.target.value)}/></div>
                <Link onClick={e=> (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join-container__inputs-btn" type="submit">Entrar</button>
                </Link>
            </div> 
        </div>
    )
}