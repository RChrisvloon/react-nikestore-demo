// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDhegdwSKHFiGqTOTR6Nw6b_I_GQGgCpHA',
	authDomain: 'react-http-b7d1c.firebaseapp.com',
	databaseURL: 'https://react-http-b7d1c-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'react-http-b7d1c',
	storageBucket: 'react-http-b7d1c.appspot.com',
	messagingSenderId: '1004776117292',
	appId: '1:1004776117292:web:90a34cfa22e9c464986d89',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

