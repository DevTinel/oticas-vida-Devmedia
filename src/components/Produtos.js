import React from 'react';
import { Card } from './Card';
import oculos1 from '../imagens/oculos01.png';
import oculos2 from '../imagens/oculos02.png';
import oculos3 from '../imagens/oculos03.png';
import oculos4 from '../imagens/oculos04.png';
import styles from '../css/Produtos.module.css';

export const Produtos = () => {
  return (
    <section id="produtos" className={styles.produtosContainer}>
      <div className={styles.produtos}>
        <h2>NOSSOS PRODUTOS</h2>
        <p>
          Trabalhamos com óculos de grau,óculos de sol,lentes transition nos
          modelos masculino ,feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado{' '}
        </p>
        <div className={styles.cards}>
          <Card
            className={styles.cardItem}
            titulo="Óculos de grau"
            src={oculos1}
            alt="grau"
            span="R$ 500,00"
          />
          <Card
            className={styles.cardItem}
            titulo="Óculos transition "
            src={oculos2}
            alt="transition"
            span="R$ 750,00"
          />
          <Card
            className={styles.cardItem}
            titulo="Óculos de sol"
            src={oculos3}
            alt="sol"
            span="R$ 700,00"
          />
          <Card
            className={styles.cardItem}
            titulo="Óculos de infantil"
            src={oculos4}
            alt="infant"
            span="R$ 500,00"
          />
        </div>
        <section className={styles.listaVantagens}>
          <div>
            <p>Todos os nossos produtos incluem :</p>
            <ul className={styles.listaVantagens}>
              <li>Garantia de 1 ano</li>
              <li>Manutenção preventiva</li>
              <li>Descontos especiais na compra da segunda unidade</li>
              <li>Flexibilidade de pagamento</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};
