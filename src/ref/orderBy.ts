
import { db } from "../firebase/config";
import { getDocs, collection, query, orderBy } from "firebase/firestore";
import { returnDocuments } from '../helpers/return-documents';


// TODO: orderBy
//? Ref: https://firebase.google.com/docs/firestore/query-data/order-limit-data?authuser=0


//* Create ref to collecion
const usersRef = collection(db, "users");

//* Create a query against the collection.
const q = query(usersRef, orderBy('salary', 'desc'))
// const q = query(usersRef, orderBy('name'), orderBy('salary', 'desc'))

//* Execute a query
const querySnapshot = await getDocs(q);

//* Process snapshot
const docs = returnDocuments(querySnapshot)

console.log('docs query', docs)
