import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA-gRlLzBMuIehqYr7UNK2eTfUofyqlxv0",
  authDomain: "expense-tracker-app-9ce78.firebaseapp.com",
  projectId: "expense-tracker-app-9ce78",
  storageBucket: "expense-tracker-app-9ce78.appspot.com",
  messagingSenderId: "696286877808",
  appId: "1:696286877808:web:ce3115a8a273c1f8fe7cb5",
  measurementId: "G-4J17PCXM61",
};

const fire = firebase.initializeApp(config);


export default fire;
