
import { db } from "../firebase/config";
import { getDocs, collection, query, startAfter, limit } from "firebase/firestore";
import { returnDocuments } from '../helpers/return-documents';


// TODO: Limit
//? Ref: https://firebase.google.com/docs/firestore/query-data/order-limit-data?authuser=0#order_and_limit_data
//? Ref: https://firebase.google.com/docs/firestore/query-data/query-cursors?authuser=0


//* Query the first page of docs
const usersRef = collection(db, "users");
const first = query(usersRef, limit(2));
const documentSnapshots = await getDocs(first);

//* Get the last visible document
const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1] || null;
console.log("last", lastVisible);

//* Construct a new query starting at this document,
const next = query(usersRef,
    startAfter(lastVisible),
    limit(2));

// TODO: Page 1
const page1 = returnDocuments(documentSnapshots);
console.log('page 1', page1);

// TODO: Page 2
const documentSnapshotsPage2 = await getDocs(next);
const page2 = returnDocuments(documentSnapshotsPage2);
console.log('page 2', page2)