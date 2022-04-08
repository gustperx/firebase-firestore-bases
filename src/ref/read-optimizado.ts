import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";
import { returnDocuments } from '../helpers/return-documents';


// TODO: Read all data (querySnapshot)
const querySnapshot = await getDocs(collection(db, "users"));

const docs = returnDocuments(querySnapshot)

console.log('docs', docs)