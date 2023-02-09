import { addDoc, collection, getFirestore, orderBy, query } from "firebase/firestore";
import { app } from "./Firebase_Config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firestore = getFirestore(app);

export const auth = getAuth();


//EMAILS COLLECTION
export const emailsCollection = collection(firestore,"emails");


//EMAILS COLLECTION Orderby query
export const emailsCollection_query = query(emailsCollection,orderBy("timestamp","desc"));

//ADD A NEW Email

export const addEmail = async (mailData) => {
    const newEmail = await addDoc(emailsCollection,{...mailData})
    console.log(`The new email was created at ${newEmail.id}`);
}

//Google Authentication Provider
export const provider = new GoogleAuthProvider();