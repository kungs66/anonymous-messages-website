import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paste Your firebaseConfig Here...


// Important Messages, See The Readme File

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
