import { DocumentData, QuerySnapshot } from "firebase/firestore";


export const returnDocuments = (snapshot: QuerySnapshot<DocumentData>) => {

    const documents: any[] = []
    snapshot.forEach((doc) => {

        documents.push({
            id: doc.id,
            ...doc.data()
        })
    });

    console.log(documents)
    return documents
}