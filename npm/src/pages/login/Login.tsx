import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redireciona para a Home ou página privada
      window.location.href = '/home';
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
