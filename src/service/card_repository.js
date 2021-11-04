import {db} from './firebase';
import {ref, set, remove, onValue} from 'firebase/database';

class CardRepository {
  syncCards(userId, onUpdate) {
    const startRef = ref(db, `${userId}/cards`);
    onValue(startRef, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return () => ref.off();
  }

  async saveCard(userId, card) {
    //firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
    await set(ref(db, `${userId}/cards/${card.id}`), card);
  }

  async removeCard(userId, card) {
    await remove(ref(db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
