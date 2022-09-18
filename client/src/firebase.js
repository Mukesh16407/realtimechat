
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3weksfDVNwpElCH1gL40kU9_Ju_ZaGEw",
  authDomain: "real-chat-ca64f.firebaseapp.com",
  projectId: "real-chat-ca64f",
  storageBucket: "real-chat-ca64f.appspot.com",
  messagingSenderId: "379115394891",
  appId: "1:379115394891:web:774770db65cb777a12face"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()