import React from 'react';
import styles from '../css/Content.module.css';

export const Content = () => {
  return (
    <section className={styles.home}>
      <div className={styles.contentItens}>
        <p>Preços baixos em</p>
        <h1>Óculos de Grau e de sol</h1>
        <p>você só encontra aqui</p>
      </div>
    </section>
  );
};
