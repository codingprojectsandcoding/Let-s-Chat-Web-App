
var firebaseConfig = {
      apiKey: "AIzaSyCzh7_jKzkwEVjKz_dfX53w-aHv0IIZ0n8",
      authDomain: "kwitter-ccb45.firebaseapp.com",
      databaseURL: "https://kwitter-ccb45-default-rtdb.firebaseio.com",
      projectId: "kwitter-ccb45",
      storageBucket: "kwitter-ccb45.appspot.com",
      messagingSenderId: "336169321412",
      appId: "1:336169321412:web:767c82a6edea10cb9cda91"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
