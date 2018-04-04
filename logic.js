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
    var trainInfo = $("#input-train-name").val().trim();
    var trainDestination = $("#input-destination").val().trim();
    var trainFrequency = $("#input-frequency").val().trim();
    var firstTrainTime = moment($("#input-first-train").val(),"HH:mm").subtract(10, "years").format("X");

    //Create new local "temporary" object for holding train data (array)

    var newTrain = {
        name: trainInfo,
        destination: trainDestination,
        frequency: trainFrequency,
        first: firstTrainTime
    };

    //Upload train data to the database
    database.ref().push(newTrain);

    //Console.log train data
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.first);

    //Alert "new train route successfully added"
    alert("New train route added successfully!")

    //Clears all of the input text boxes
    $("#input-train-name").val("");
    $("#input-destination").val("");
    $("#input-frequency").val("");
    $("#input-first-train").val("");
});

    //Create firebase event for adding the train route to the database and a row in the HTML when a user adds the entry
    database.ref().on("child_added", function(childShapshot, prevChildKey){
        console.log(childShapshot.val());
    
    //Store everything into a variable
        var trainInfo = childShapshot.val().name;
        var trainDestination = childShapshot.val().destination;
        var trainFrequency = childShapshot.val().frequency;
        var firstTrainTime = childShapshot.val().first;

    //console log ^^
        console.log(trainInfo);
        console.log(trainDestination);
        console.log(trainFrequency);
        console.log(firstTrainTime);

    //"Pretify" the first train time format
        var firstTrainPretty = moment().diff(moment.unix(firstTrainTime,"X"), "minutes");

    //Calculate the next arrival

    //Calculate the minutes away

    //Add each train's data into the table
    $("#train-table").append(
        "<tr><td>" +
        trainInfo +
        "<td><td>" +
        trainDestination +
        "<td><td>" +
        trainFrequency
    );

});


});