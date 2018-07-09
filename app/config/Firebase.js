import firebase from 'firebase';


const config={
    apiKey: "AIzaSyBNmAmw_Y49eHtZwaTfVoeNNBcxicW88Xo",
    authDomain: "sahastore-3efc1.firebaseapp.com",
    databaseURL: "https://sahastore-3efc1.firebaseio.com",
    projectId: "sahastore-3efc1",
    storageBucket: "sahastore-3efc1.appspot.com",
    messagingSenderId: "1039401076925"
}



const Firebase = firebase.initializeApp(config);

export default Firebase;