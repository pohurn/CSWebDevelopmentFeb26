function SubmitFunction(){
    // alert("hello navin");


    var nameText = document.getElementById("sherif");

    if(nameText.value == ""){
window.alert("eror");
    }else{
window.alert("ok");
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