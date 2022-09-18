import React from 'react';
import loja from '../imagens/loja.png';
import atendimento from '../imagens/atendimento.png';
import styles from '../css/Sobre.module.css';

export const Sobre = () => {
  return (
    <section className={styles.sobreContainers} id="sobre">
      <div className={styles.sobreItens}>
        <div className={styles.sobreNos}>
          <h2>QUEM SOMOS NÓS</h2>
          <p>
            Fundada em 2001,em Nova Iguaçu - Rio de Janeiro , a Óticas vida
            iniciou suas atividades focada no atendimento ao público de renda
            mais baixa ,sempre com objetivo de proporcionar ao cliente bom
            atendimento ,qualidade e preço baixo.
          </p>
        </div>

        <div className={styles.containerSobreNos}>
          <div className={styles.bloco}>
            <img src={loja} alt="loja" />
            <div className={styles.blocoItem}>
              <h4>NOSSAS FILIAIS </h4>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na Ámerica</p>
            </div>
          </div>

          <div className={styles.bloco}>
            <div className={styles.blocoItem}>
              <h4> ATENDIMENTO FLEXIVEL</h4>
              <p>Nossa equipe é treinada para te atender </p>
            </div>
            <img src={atendimento} alt="atendimento" />
          </div>
        </div>
      </div>
    </section>
  );
};
