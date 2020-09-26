import React from 'react';

import './InfoBar.scss'

export default function InfoBar({room}){
    return(
        <div className="info-bar">
            <div className="info-bar__left-container">
                <h3>{room}'s room</h3>
            </div>
            <div className="info-bar__right-container">
                <a href="/">x</a>
            </div>
        </div>
    )
}