import React from 'react';
import tel from '../imagens/telefone.png';
import local from '../imagens/local.png';
import email from '../imagens/email.png';
import fb from '../imagens/fb.png';
import ig from '../imagens/ig.png';
import tt from '../imagens/tt.png';
import styles from '../css/Contato.module.css';

export const Contato = () => {
  return (
    <section id="contato" className={styles.contatoContainer}>
      <div className={styles.contato}>
        <div>
          <h5>FALE CONOSCO</h5>
          <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em
            contato através de nossas redes sociais ou da central de
            atendimento.
          </p>
        </div>

        <div className={styles.contatoDiv}>
          <div className={styles.contatoItens}>
            <h5>contato</h5>
            <span>
              <img src={local} alt="local" />
              <p> Nova Iguaçu - RJ</p>
            </span>
            <span>
              <img src={tel} alt="telefone" />
              <p>(21)-9999 - 9999</p>
            </span>
            <span>
              <img src={email} alt="email" />
              <p>contato@oticavida.com</p>
            </span>
          </div>

          <div className={styles.redesSociais}>
            <h5>Redes sociais</h5>
            <a href="#">
              <span>
                <img src={fb} alt="facebook" />
                <p> /Oticavida</p>
              </span>
            </a>
            <a href="#">
              <span>
                <img src={ig} alt="instagram" />
                <p> @oticavidarj</p>
              </span>
            </a>
            <a href="#">
              {' '}
              <span>
                <img src={tt} alt="twitter" />
                <p> @oticavidarj</p>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
