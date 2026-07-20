// ---------- PROMISE STYLE ----------

function getUser(id) {
  // getUser now takes ONLY the id. No callback is passed in — instead,
  // this function will hand something back to the caller.

  return new Promise((resolve) => {
    // We create and immediately return a new Promise object. A Promise
    // takes a function (called the "executor") that runs right away.
    // That executor receives a `resolve` function as an argument.

    setTimeout(() => {
      // Same simulated delay as before — nothing here runs immediately.

      resolve({ id, name: "Ana" });
      // Calling resolve(...) is what flips this Promise from "pending"
      // to "fulfilled," and permanently attaches this value to it.
    }, 1000);
  });
  // At this exact point, getUser(1) has already returned — but it
  // returned a PENDING promise, not the actual user data yet.
}

getUser(1)
  // Calling getUser(1) immediately gives us back a Promise object.
  // We're not passing in a callback here — we're receiving something.

  .then((user) => {
    // .then() registers a function to run automatically once the
    // Promise resolves. This is chained ON the promise, not passed IN
    // to getUser. It behaves like the callback did, but from the outside.

    console.log(user.name);
    // Same delayed timing as the callback version — this only runs
    // once resolve() has been called inside getUser, about 1s later.
  });