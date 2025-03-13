import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';  
import styles from "./Cadastro.module.css";
import Link from '../../components/link/Link';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Conta cadastrada com sucesso !');
      window.location.href = '/';
    } catch (error) {
      alert('Erro ao criar conta');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleCadastro} className={styles.form}>
        <h2 className={styles.title}>Faça seu cadastro !</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
        <button type="submit" className={styles.button}>Cadastrar</button>
        <Link to="/" label='Voltar'></Link>
      </form>
    </div>
  );
};

export default Cadastro;