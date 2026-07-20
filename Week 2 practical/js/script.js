function SubmitFunction(){

    var textName = document.getElementById("name");

    var textAddress = document.getElementById("address")

    var textMessage = document.getElementById("message")

    if(textName.value == "") {
        window.alert("Please enter name");
    }else {
        window.alert("Hello " + textName.value)
    }

    if(textAddress.value =="") {
        window.alert("Please enter address");
    }

    if(textMessage.value == "") {
        window.alert("Please enter a message");
    }







    return;


}


/*

explain: console.log, window.alert, localstorage, cookie

Logic to write (15 mins)

when user clicks on submit btn

- if name, address and message are empty, alert user to fill in all the infos

- if name is not empty but the rest are empty, alert user by their name and tell them to fill in the infos

- if every field is not empty, when user clicks on submit, alert success

*/