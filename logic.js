$(document).ready(function () {

// Initalize Firebase
var config = {
    apiKey: "AIzaSyAmleFNJmQWEEjFRYmWLkRtZ1dGoMpT9M4",
    authDomain: "train-times-1250c.firebaseapp.com",
    databaseURL: "https://train-times-1250c.firebaseio.com",
    projectId: "train-times-1250c",
    storageBucket: "train-times-1250c.appspot.com",
    messagingSenderId: "700690546145"
      };

      firebase.initializeApp(config);

    var database = firebase.database();

// Create "on" event listener for add train button 
$("#add-train-button").on("click", function(event){
    event.preventDefault();

    // Grabs userinput
    var newTrain = $("#input-train-name").val().trim();
    var trainDestination = $("#input-destination").val().trim();
    var trainFrequency = $("input-frequency").val().trim();
    

})

})