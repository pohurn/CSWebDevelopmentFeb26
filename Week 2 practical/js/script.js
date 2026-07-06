function SubmitFunction(){

    var nameText = document.getElementById("name");
    var addressText = document.getElementById("address");
    var messageText = document.getElementById("message");


    if(nameText.value == "" && addressText.value == "" && messageText.value == ""){
         window.alert("Please fill in all the information.");
    } else if(nameText.value != "" && (addressText.value == "" || messageText.value == "")){
          window.alert("Hi " + nameText.value + ", please fill in the rest of the information.");
    } else {
          window.alert("Success! Your information has been submitted.");
    }

}


/*

explain: console.log, window.alert, localstorage, cookie

Logic to write (15 mins)

when user clicks on submit btn

- if name, address and message is empty, alert user to fill in all the infos

- if name is not empty but the rest are empty, alert user by their name and tell them to fill in the infos

- if every field is not empty, when user clicks on submit, alert success

*/