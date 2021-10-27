import {initializeApp} from 'firebase/app'
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBbjLKQWtmWHNbLyRH2QG5K8FFBrGeaCIE",
  authDomain: "login-299a6.firebaseapp.com",
  projectId: "login-299a6",
  storageBucket: "login-299a6.appspot.com",
  messagingSenderId: "414313457296",
  appId: "1:414313457296:web:8229e7441bdd9a1737da15",
  measurementId: "G-F73N4HHZ8B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)



