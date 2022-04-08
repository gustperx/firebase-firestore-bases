import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";


// TODO: Update firestore

//* Get ref doc
const userRef = doc(db, 'users', '4p303Q5uMltq3k4VJquo')

//* Update
updateDoc(userRef, {
  dev: true,
  'favorites.food': "Pizza" // nested obj
})
