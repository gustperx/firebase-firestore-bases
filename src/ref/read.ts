import { db } from "../firebase/config";
import { getDocs, collection } from "firebase/firestore";



// TODO: Read all data (querySnapshot)
const querySnapshot = await getDocs(collection(db, "users"));

// console.log(querySnapshot)

const usersArr: any[] = []
querySnapshot.forEach((doc) => {

  // console.log(`${doc.id} => ${doc.data()}`);
  // console.log(doc.id)
  // console.log(doc.data())
  // console.log(doc)

  usersArr.push({
    id: doc.id,
    ...doc.data()
  })

});

console.log(usersArr)