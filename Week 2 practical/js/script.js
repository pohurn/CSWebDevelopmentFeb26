



function SubmitFunction(){
    var nameText = document.getElementById("inputted_name");
    var addressText = document.getElementById("inputted_address");
    var messageText = document.getElementById("inputted_message");

    if (addressText.value || messageText.value =="" && nameText.value !="" ){
    window.alert(nameText.value + " Please enter a valid address & message")
    }

    if(nameText.value == ""){
        window.alert("Error! Please enter a valid Name");
    } else if(addressText.value == ""){
        window.alert("Error! Please enter a valid Address");
    } else if (messageText.value == ""){
        window.alert("Error! Please enter a valid Message");
    } else if (nameText.value && addressText.value && messageText !=""){
        window.alert("Success")
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