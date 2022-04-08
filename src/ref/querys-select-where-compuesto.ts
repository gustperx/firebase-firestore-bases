
import { db } from "../firebase/config";
import { getDocs, collection, query, where } from "firebase/firestore";
import { returnDocuments } from '../helpers/return-documents';


// TODO: SELECT - WHERE Consult
//? Ref: https://firebase.google.com/docs/firestore/query-data/queries?authuser=0


//* Create ref to collecion
const usersRef = collection(db, "users");

//* Create a query against the collection.
// const q = query(usersRef, where('activo', '==', true))

//* Execute a query
// const querySnapshot = await getDocs(q);

//* Process snapshot
// const docs = returnDocuments(querySnapshot)

// console.log('docs query', docs)


// TODO: Tarea 1

//* Create a query against the collection.
// const querySalary = query(usersRef, where('salary', '>', 1800))

//* Execute
// const querySnapshotSalary = await getDocs(querySalary)

//* Process
// const docsSalary = returnDocuments(querySnapshotSalary)

// console.log('salary', docsSalary)


// TODO: Consulta compuesta
//? Ref: https://firebase.google.com/docs/firestore/query-data/queries?authuser=0#compound_queries

//* Create a query against the collection.
// const querySalary2 = query(usersRef, where('salary', '>=', 1800), where('salary', '<=', 2300))

//* Execute
// const querySnapshotSalary2 = await getDocs(querySalary2)

//* Process
// const docsSalary2 = returnDocuments(querySnapshotSalary2)

// console.log('salary compuesto', docsSalary2)


// TODO: Consulta compuesta 2
//? Ref: https://firebase.google.com/docs/firestore/query-data/queries?authuser=0#compound_queries

//* Create a query against the collection.
const querySalary3 = query(usersRef, where('salary', '>=', 1800), where('activo', '==', true))

//* Execute
const querySnapshotSalary3 = await getDocs(querySalary3)

//* Process
const docsSalary3 = returnDocuments(querySnapshotSalary3)

console.log('salary compuesto 2', docsSalary3)