import React from 'react';
import styles from './editor.module.css';
import CardEditForm from '../card_edit_form/card_edit_form';
import CardAddForm from '../card_add_form/card_add_form';

const Editor = ({cards, addCard, updateCard, removeCard, FileInput}) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <CardAddForm addCard={addCard} FileInput={FileInput} />
      {Object.keys(cards).map((k) => (
        <CardEditForm key={k} card={cards[k]} updateCard={updateCard} removeCard={removeCard} FileInput={FileInput} />
      ))}
    </section>
  );
};

export default Editor;
