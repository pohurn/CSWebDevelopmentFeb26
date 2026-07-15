function SubmitFunction() {

    var nameText = document.getElementById("name").value;
    var addressText = document.getElementById("address").value;
    var messageText = document.getElementById("message").value;

    if(nameText == "" && addressText == "" && messageText == ""){
        window.alert("Please fill in your name, address and message.");
    }
    else if(nameText != "" && (addressText == "" || messageText == "")){
        window.alert("Hi " + nameText + ", please fill in the remaining information.");
    }
    else if(nameText == "" || addressText == "" || messageText == ""){
        window.alert("Please fill in all the information.");
    }
    else{
        window.alert("Successfully submitted!");
    }

}
/*  

explain: console.log, window.alert, localstorage, cookie

Logic to write (15 mins)

when user clicks on submit btn

- if name, address and message are empty, alert user to fill in all the infos

- if name is not empty but the rest are empty, alert user by their name and tell them to fill in the infos

- if every field is not empty, when user clicks on submit, alert success

*/