import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBZbnHWoKvPPejdrep_P-OGFUyje07F-9E',
  authDomain: 'crwn-clothing-db-297b0.firebaseapp.com',
  projectId: 'crwn-clothing-db-297b0',
  storageBucket: 'crwn-clothing-db-297b0.appspot.com',
  messagingSenderId: '74595021392',
  appId: '1:74595021392:web:f042822a270e97a55f5755',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log('error', error.message);
    }
  }
  return userDocRef;
};
