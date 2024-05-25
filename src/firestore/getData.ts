import firebase_app from "@/firebase/config";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getData(collection: string) {
  let docRef = doc(db, collection);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
