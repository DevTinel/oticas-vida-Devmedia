import React from 'react';
import logo from '../imagens/logo.png';
import styles from '../css/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <a href="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>

        <div className={styles.listNav}>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre"> SOBRE</a>
          <a href="#contato">CONTATO</a>
        </div>
      </nav>
    </header>
  );
};
