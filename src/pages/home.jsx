import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
    const irParaHome = useNavigate();

    const handleClick = () => {
        irParaHome('/');
    };

    return (
        <div>
            <h1>Bem vindo a Home</h1>

            <button onClick={handleClick}>
                Voltar
            </button>
        </div>
    )
}

export default Home;