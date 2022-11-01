import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider, signInWithRedirect } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOh4Bmv6o8w9eu94hIi_xW5fHvbSsRQSY",
  authDomain: "simplemark-58cc4.firebaseapp.com",
  projectId: "simplemark-58cc4",
  storageBucket: "simplemark-58cc4.appspot.com",
  messagingSenderId: "796900292421",
  appId: "1:796900292421:web:0f619cfadd41e34aa0f02c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// const provider = new OAuthProvider('google.com');
const microsoft_provider = new OAuthProvider('microsoft.com');

microsoft_provider.setCustomParameters({
  // tenant: "[tenant].com"
  prompt: "consent",
  tenant: "482198bb-ae7b-4b25-8b7a-6d7f32faa083",
});


export const signinWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signinWithMicrosoft = () => {
  // Sign in with Microsoft and redirect to the home page when successful
  // signInWithRedirect(auth, provider)
  //   .then((result) => {
  //     // This gives you a Microsoft Access Token. You can use it to access the Microsoft API.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(user);
  //     localStorage.setItem("name", user.displayName);
  //     localStorage.setItem("email", user.email);
  //     localStorage.setItem("profilePic", user.photoURL);
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });
    

  signInWithPopup(auth, microsoft_provider)
    .then((result) => {
      // const name = result.user.displayName;
      // const email = result.user.email;

      // localStorage.setItem("name", name);
      // localStorage.setItem("email", email);

      const credential = OAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      localStorage.setItem("name", user.displayName);
      localStorage.setItem("email", user.email);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => {
  auth.signOut().then(() => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  });
}
