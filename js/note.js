import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, getDocs, where, orderBy, query, onSnapshot } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvKqHz-FoH-Z2_aozwYZ6D2-lvXCVCt7M",
  authDomain: "notes-2110d.firebaseapp.com",
  projectId: "notes-2110d",
  storageBucket: "notes-2110d.appspot.com",
  messagingSenderId: "329432694297",
  appId: "1:329432694297:web:4fd609219455852d497488",
  measurementId: "G-68550VT368"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const q = query(collection(db, "note"));

const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const notes = [];
  querySnapshot.forEach(doc => {
    notes.push(doc.data().memo)
  })

  console.log(notes);
})