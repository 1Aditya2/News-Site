// import {getDatabase, get, set, remove, child, ref, update} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js"

// // app=initializeApp()
// const db=getDatabase(app);
// Import the functions you need from the SDKs you need
import {getDatabase,set,ref} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtZFUyv-KWDIM7TQitSedvEmM3NkS4WwE",
  authDomain: "web-app-2e6c0.firebaseapp.com",
  databaseURL: "https://web-app-2e6c0-default-rtdb.firebaseio.com",
  projectId: "web-app-2e6c0",
  storageBucket: "web-app-2e6c0.appspot.com",
  messagingSenderId: "15413696441",
  appId: "1:15413696441:web:cb351638455ab9e2804868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getDatabase(app)

// var roll,namev,genv,add


//References
var namebox=document.getElementById("inputname")
var countrybox=document.getElementById("inputcountry")
var genbox=document.getElementById("inputgen")
var agebox=document.getElementById("inputage")
var expbox=document.getElementById("exp")
var rembox=document.getElementById("inputrem")


var namev,countryv,genderv,agev,remarksv,expv
function readformdata(){
    namev=namebox.value;
    countryv=countrybox.value;
    genderv=genbox.value;
    agev=agebox.value;
    remarksv=rembox.value;
    expv=expbox.value;
}
function clearformdata(){
    namebox.value=""
    countrybox.value=""
    genbox.value=""
    agebox.value=""
    expbox.value=""
    rembox.value=""
}


var btn=document.getElementsByClassName("btn btn-primary")[0]

btn.onclick=function(e){
    e.preventDefault()

    readformdata()
    console.log(namev,agev,genderv,countryv,remarksv,expv)

    //code to send the data to firbase
    if(!expv==""){
        set(ref(db, "Data/" + namev), {
            experience: expv,
            name: namev,
            country: countryv,
            gender: genderv,
            age: agev,
            remarks: remarksv
        }).then(()=>{
            alert("Your response has been recorded!")
        }).catch(error=>{
            alert("Couldn't submit your response")
        })
        clearformdata()
    }
    else{
        alert("Please share your experience")
    }
    
}



