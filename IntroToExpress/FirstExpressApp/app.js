const express = require("express");
const app = express();

// "/" => "Hi there"
app.get("/", (req, res) => res.send("Hi there"));
// "/bye" => "Goodbye"
app.get("/bye", (req, res) => res.send("Goodbye"));
// "/dog" => "Woof"
app.get("/dog", (req, res) => {
    res.send("Woof")
    console.log("Someone has made a request!")
});
// Route for everything else that doesn't match defined routes, should ALWAYS be last because of route order
app.get("*", (req, res) => res.send("You're a noob, there's nothing here!"));
// Tell Express to listen for requests (start server)
app.listen(3000, () => console.log("Server has started."));