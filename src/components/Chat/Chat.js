import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar'
import Input from '../Input'
import Messages from '../Messages'
import UsersOnline from '../UsersOnline'

import './Chat.scss'

let socket;

export default function Chat({location}){

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = "https://chatsocketserver.herokuapp.com/"
    useEffect(()=>{
        const {name, room} = queryString.parse(location.search)
        setName(name);
        setRoom(room);
        socket = io(ENDPOINT);

        socket.emit("join",{name, room},()=>{

        })
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
        },[ENDPOINT,location.search])
        //handling messages
    useEffect(()=>{
        //listen for messages
        socket.on('message',(message)=>{
            setMessages([...messages, message]);
        })
        socket.on('roomData',({users})=>{
            setUsers(users);
        })
    },[messages])
    //functino for sending messages
    const sendMessage = (e)=>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message, ()=>{
                setMessage('')
            })
        }
    }
    console.log(message, messages)
    return(
        <div className="chat">
            <div className="chat__container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
            <UsersOnline users={users} />
        </div>
    )
}