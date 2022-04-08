import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

// TODO: Delete firestore

//* Get ref doc
const userRef = doc(db, 'users', '4p303Q5uMltq3k4VJquo')

//* Delete
deleteDoc(userRef)
