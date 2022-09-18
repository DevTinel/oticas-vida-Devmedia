import React from 'react';
import styles from '../css/Cards.module.css';

export const Card = ({ titulo, src, span, alt }) => {
  return (
    <section className={styles.cardsContainer}>
      <div className={styles.cardsItens}>
        <h3>{titulo}</h3>
        <img className={styles.cardImg} src={src} alt={alt} />
        <span>{span}</span>
      </div>
    </section>
  );
};
