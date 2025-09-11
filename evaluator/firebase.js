import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBICN6ie-yV2dL3pQeKnR_qFFQ-LsAkuVs",
  authDomain: "evaluacion-continua-39a84.firebaseapp.com",
  projectId: "evaluacion-continua-39a84",
  storageBucket: "evaluacion-continua-39a84.firebasestorage.app",
  messagingSenderId: "1073788724297",
  appId: "1:1073788724297:web:ecd14963702acdc0054b98",
  measurementId: "G-1QSK510FL1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
