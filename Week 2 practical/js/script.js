function SubmitFunction(){
    //alert("Successfully submitted!");

    var nameText = document.getElementById("name").value;
    console.log(nameText);

    var addressText = document.getElementById("address").value;
    console.log(addressText);

    var messageText = document.getElementById("message").value;
    console.log(messageText);   

    if(nameText == "" && addressText == "" && messageText == ""){
        window.alert("Please Sadia, fill in your name, address and message");
    }else{
        window.alert("Successfully submitted!");
    }

    //if(nameText.value == ""){
    //    window.alert("Please Sadia, fill in your name");
    //}
    //else if(addressText.value == ""){
    //    window.alert("Please Sadia, fill in your address");
    //}
    //else if(messageText.value == ""){
      //  window.alert("Please Sadia, fill in your message");
    //}else{
      //  window.alert("Successfully submitted!");
    //}

    return;
}

/*  

explain: console.log, window.alert, localstorage, cookie

Logic to write (15 mins)

when user clicks on submit btn

- if name, address and message is empty, alert user to fill in all the infos

- if name is not empty but the rest are empty, alert user by their name and tell them to fill in the infos

- if every field is not empty, when user clicks on submit, alert success

*/