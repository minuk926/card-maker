import React, {useCallback, useEffect, useState} from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useHistory} from 'react-router-dom';
import Preview from '../preview/preview';
import Editor from '../editor/editor';
const Maker = ({authService, FileInput, cardRepository}) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  const logout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      //const updated = {...cards, [card['id']]: card};
      //const updated = {...cards, [card.id]: card};
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const removeCard = (card) => {
    setCards((cards) => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push('/');
      }
    });
  }, [authService, history]);

  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [cardRepository, userId]);

  return (
    <section className={styles.maker}>
      <Header onLogout={logout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          removeCard={removeCard}
          FileInput={FileInput}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
