import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyATzcu-Lsd8Q8lldpyA29hkQlXhRDS-R_Y",
    authDomain: "crwn-db-7314d.firebaseapp.com",
    projectId: "crwn-db-7314d",
    storageBucket: "crwn-db-7314d.appspot.com",
    messagingSenderId: "580079477274",
    appId: "1:580079477274:web:e6c2d6dfcf5d50fa9ea7a3",
    measurementId: "G-X0P8899Z1K"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShop = await userRef.get();
    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase