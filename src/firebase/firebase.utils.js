import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzmKbkmVY_8hZ-x4NVP_mFUKhHARYt-9A",
  authDomain: "white-label-ecommerce.firebaseapp.com",
  projectId: "white-label-ecommerce",
  storageBucket: "white-label-ecommerce.appspot.com",
  messagingSenderId: "133612210658",
  appId: "1:133612210658:web:2323b2d20db7c842d451bb",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, docsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  docsToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, doc);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export default firebase;
