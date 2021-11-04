import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({cards}) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card preview</h1>
    <ul className={styles.cards}>
      {Object.keys(cards).map((k) => (
        <Card key={k} card={cards[k]} />
      ))}
    </ul>
  </section>
);

export default Preview;
