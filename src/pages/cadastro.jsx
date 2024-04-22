import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const irParaLogin = useNavigate();
const handleClick = () => {
    irParaLogin('/');
};

function Cadastro() {
  const [usuario, setUsuario] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
  username: '',
  password: '',
});

  useEffect(() => {
   fetchUsuario();
  }, []);
}

//POST
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8090/api/login', novoUsuario);
    fetchUsuario();
    setNovoUsuario({
      username: '',
      password: '',
    });
  } catch (error) {
    console.error('Erro ao criar Usuario:', error);
  }
  
  return (
    <div>
      <h1>Cadastro de Usuarios</h1>
  
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder=  "username"
          value={novoUsuario.username}
          onChange={handleInputChange}
        />
        <input
          type="number" 
          name="password"
          placeholder=  "password"
          value={novoUsuario.password}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar Usuario</button>
      </form>
  
      <button onClick={handleClick}>
            Voltar
        </button>
    </div>
  );

};

export default Cadastro;