// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  addDoc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//const express = require('express')
//eller:
import express from "express";
import pug from "pug";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhe5LNd660KdviuN2cMhSgs2erGXC3g9A",
  authDomain: "cars-e1e01.firebaseapp.com",
  projectId: "cars-e1e01",
  storageBucket: "cars-e1e01.appspot.com",
  messagingSenderId: "870124243077",
  appId: "1:870124243077:web:fd75c94318b35d88cbc1ec",
  measurementId: "G-9GNQGP6Z9L",
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

const beskedRef = db.collection("besked");
const chatrumRef = db.collection("chatrum");

async function getBesked() {
  let beskedCol = collection(db, "besked");
  let beskeder = await getDocs(beskedCol);

  let beskedList = beskeder.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return beskedList;
}

async function getChatRum() {
  let chatRumCol = collection(db, "chatrum");
  let chatRum = await getDocs(chatRumCol);

  let chatRumList = chatRum.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return chatRumList;
}

async function addBesked(besked) {
  addDoc(collection(db, "besked"), besked);
}

async function deleteBesked(docID) {
  await deleteDoc(doc(db, "besked", docID));
}

async function getBeskedById(docID) {
  let docRef = doc(db, "besked", docID);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

async function getBeskedByChatRum(chatRum) {
  let q = query(beskedRef, where("chatrum", "==", chatRum));
  let querySnapshot = await getDocs(q);
  let beskedList = querySnapshot.docs.map((doc) => {
    let data = doc.data();
    data.docID = doc.id;
    return data;
  });
  return beskedList;
}

async function getChatRumById(docID) {
  let docRef = doc(db, "chatrum", docID);
  let docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

app.get("/beskeder", async (request, response) => {
  const besked = await getBesked();
  response.render("beskeder", { beskeder: besked });
});

app.get("/beskeder/:chatrum", async (request, response) => {
  let beskeder = await getBeskedByChatRum(request.params.chatrum);
  response.render();
});

app.get("/chatrum", async (request, response) => {
  const chatRum = await getChatRum();
  response.render("chatrum", { chatrum: chatRum });
});

app.post("/beskeder", async (request, response) => {
  let { chatrum, besked } = request.body;
  console.log(request.body);
  await addBesked(request.body);
  response.redirect("/beskeder");
});

app.delete("/beskeder/:docID", async (request, response) => {
  await deleteBesked(request.params.docID);
  response.status(200);
  response.send("Deleted");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.listen(port);

console.log("Lytter på port " + port + " ...");
