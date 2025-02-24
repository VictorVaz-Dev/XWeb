import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase'; 
import styles from './Login.module.css'

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
    <div className={styles.container}>  
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Faça seu Login !</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
