import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const user = {
  name: "Marcos",
  activo: false,
  birthday: 0
}

// TODO: Add firestore
addDoc(collection(db, 'users'), user).then(docRef => {
  console.log(docRef)
  console.log("Document written with ID: ", docRef.id);
}).catch(e => {
  console.error("Error adding document: ", e);
})


