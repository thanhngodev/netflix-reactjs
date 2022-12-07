import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { API_KEY } from "./enum";

const firebaseConfig = {
  apiKey: API_KEY.API_KEY_FIREBASE.API_KEY,
  authDomain: API_KEY.API_KEY_FIREBASE.AUTH_DOMAIN,
  projectId: API_KEY.API_KEY_FIREBASE.PROJECT_ID,
  storageBucket: API_KEY.API_KEY_FIREBASE.STORAGE_BUCKET,
  messagingSenderId: API_KEY.API_KEY_FIREBASE.MESSAGING_SENDER_ID,
  appId: API_KEY.API_KEY_FIREBASE.APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
