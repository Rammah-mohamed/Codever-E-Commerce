import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyASVNN6e1aB7_UmaY90olA64S-N6aMlxXs",
	authDomain: "e-commerce-901fd.firebaseapp.com",
	projectId: "e-commerce-901fd",
	storageBucket: "e-commerce-901fd.appspot.com",
	messagingSenderId: "1094057238444",
	appId: "1:1094057238444:web:e7dbf93225968510396409",
	measurementId: "G-KRM91PFTBH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
