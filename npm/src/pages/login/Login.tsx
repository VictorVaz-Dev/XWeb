import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../services/firebase'; 
import styles from './Login.module.css';
import Link from '../../components/link/Link.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/home';
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  const handlePasswordReset = async () => {
    if (!email) {
      alert('Digite seu email para recuperar a senha');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      alert('Email de recuperação enviado! Verifique sua caixa de entrada.');
    } catch (error) {
      alert('Erro ao enviar email. Verifique o endereço.');
    }
  };

  return (
    <div className={styles.container}>  
      <form onSubmit={handleLogin} className={styles.form}>
        <h2 className={styles.title}>Faça seu Login !</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
        <div className={styles.autenticator}>
          <button type="submit" className={styles.button}>Entrar</button>
          <Link to="/cadastro" label="Cadastre-se"></Link>
        </div>
        <button type="button" onClick={handlePasswordReset} className={styles.button}>
          Esqueci minha senha
        </button>
      </form>
    </div>
  );
};

export default Login;
