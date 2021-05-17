import React from 'react';
import './style.css';

export default function Header(propriedades){
    return (
        <header id="main-header">
            <h1>{propriedades.title}</h1>
        </header>
    )
}