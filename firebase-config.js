const firebaseConfig = {
     apiKey: "AIzaSyBnDGSg_K60_Tp7w13c-O8Jb9hLkErSCY8",
      authDomain: "gamexd-110.firebaseapp.com",
      projectId: "gamexd-110",
      storageBucket: "gamexd-110.firebasestorage.app",
      messagingSenderId: "501792431454",
      appId: "1:501792431454:web:10024d189316ef9e2303cf"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();