// src/firebase/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// 🔥 REAL PRODUCTION Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL14C8LkoAJSCYk7Nf4Y6vQICeDKFJbao",
  authDomain: "realty-trust-107a1.firebaseapp.com",
  projectId: "realty-trust-107a1",
  storageBucket: "realty-trust-107a1.firebasestorage.app",
  messagingSenderId: "322870804682",
  appId: "1:322870804682:web:9b331e15b7052a0aefb433",
  measurementId: "G-Q2DPM2L49J",
};

// ✅ Safe initialize (no duplicate app error)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// 🔹 Firestore
export const db = getFirestore(app);

// 🔹 Storage
export const storage = getStorage(app);

// 🔹 Analytics (browser-safe)
export let analytics: any = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

// 🔹 File upload helper (used in GetOffer.tsx)
export const uploadFile = async (
  path: string,
  file: File
): Promise<string> => {
  const storageRef = ref(storage, `${path}/${Date.now()}-${file.name}`);

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
};
