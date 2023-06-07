import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCnlGlh5t9s3CK-uH2BSCYR70a1N0izwFQ",
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  databaseURL:"https://pet-pro-b1a93-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);
//! register
export const createUser = async(email, password, navigate)=> {
    try {
        let userCredential =await createUserWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential)
    } catch (error) {
        console.log(error)
    }

}


export const signIn = async(email, password, navigate)=> {
    try {
        let userCredential =await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        console.log(userCredential)
    } catch (error) {
        console.log(error)
    }

}

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user)
        } else {
            setCurrentUser(false)
        }
      });
}

export const logout = () => {
    signOut(auth)
 }

 export const  signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result);
        navigate("/")
 })}

 export const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("please check your mail box")
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
 }


 
 export default firebase