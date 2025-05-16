// Import các chức năng cần dùng
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Cấu hình Firebase của bạn
const firebaseConfig = {
  
  apiKey: "AIzaSyAgisA0LTElZlfLWNHBRDrnmWQBDkPdpzY",
  authDomain: "lab4app-cfa8c.firebaseapp.com",
  //databaseURL: "https://lab4app-cfa8c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lab4app-cfa8c",
  storageBucket: "lab4app-cfa8c.firebasestorage.app",
  messagingSenderId: "834186199331",
  appId: "1:834186199331:web:893b73437d254c5cc10c96"

};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Auth, Database và Storage
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
