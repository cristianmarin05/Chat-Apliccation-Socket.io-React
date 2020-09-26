import React from 'react';

import './UsersOnline.scss'

export default function UsersOnline({users}){
    console.log(users)
    if(users){
        
        users.forEach(m=>console.log(m.name))
    }
    return(
        <div className="users-container">
            <h2>Usuarios en sala</h2>
            <ul>
                {
                  users &&
                  users.map((user,index)=>{
                  return <li key={index}>{user.name}</li>
                  })
                }
            </ul>
        </div>
    )
}