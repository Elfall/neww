import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Inserisci qui la tua configurazione Firebase
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);