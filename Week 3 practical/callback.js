// ---------- CALLBACK STYLE ----------

function getUser(id, callback) {
  // getUser takes two things: the id we're looking up, AND a callback
  // function — the "phone number" the caller wants us to dial later.

  setTimeout(() => {
    // setTimeout simulates a slow operation (like a network request).
    // Nothing inside this arrow function runs now — it's scheduled to
    // run 1000ms (1 second) in the future.

    callback({ id, name: "Ana" });
    // Once the "work" is done, we manually call the callback function
    // ourselves, passing it the result. This is the "calling back."
  }, 1000);
  // 1000 = the delay in milliseconds before the timer fires.
}

getUser(1, (user) => {
  // We call getUser, passing 1 as the id, and an inline arrow function
  // as the callback. This function is NOT run immediately — it's stored
  // and will only run once getUser decides to invoke it.

  console.log(user.name);
  // This line only executes once the callback is actually called,
  // roughly 1 second after getUser(1, ...) was first run.
});