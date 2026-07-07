var nameText = document.getElementById("input_name");
var address = document.getElementById("input_address");
var message = document.getElementById("input_message");

function checkform() {
  if (nameText.value === "" && address.value === "" && message.value === "") {
    alert("please fill all the empty placeholders");
  } else if (
    nameText.value !== "" &&
    address.value === "" &&
    message.value === ""
  ) {
    alert(`${nameText.value} please fill in the rest of the info`);
  } else if (
    nameText.value !== "" &&
    address.value !== "" &&
    message.value !== ""
  ) {
    alert("Success");
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
