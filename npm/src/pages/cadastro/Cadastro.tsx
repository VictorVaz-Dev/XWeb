import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';  
import style from "./Cadastro.module.css"



const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redireciona para o login ou página inicial
      alert('Conta cadastrada com sucesso !');
      window.location.href = '/Login';
    } catch (error) {
      alert('Erro ao criar conta');
    }
  };

  return (
    <form onSubmit={handleCadastro}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Cadastro;
