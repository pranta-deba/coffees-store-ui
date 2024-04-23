import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrcM8y6PxHD3DeNhAmR7FhTLdBSedigT0",
  authDomain: "coffee-store-e1b04.firebaseapp.com",
  projectId: "coffee-store-e1b04",
  storageBucket: "coffee-store-e1b04.appspot.com",
  messagingSenderId: "427171161159",
  appId: "1:427171161159:web:d6f0c94660c92409b8fd62",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

