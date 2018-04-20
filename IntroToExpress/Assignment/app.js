const express = require('express');
const app = express();

// "/" => "Hi there"
app.get("/", (req, res) => res.send("Hi there, welcome to my assignment!"));

app.get("/speak/:animal", (req, res) => {
    const sounds = {
        dog: "woof",
        pig: "oink",
        cat: "I hate you human",
        cow: "moo",
        goldfish: "..."
    };
    let animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " goes '" + sound + "'.");
});

app.get("/repeat/:message/:times", (req, res) => {
    let message = req.params.message + " ";
    let times = Number(req.params.times);
    let result = "";  

    for (var i = 0; i < times; i++) {
        result += message;
    }
    res.send(result);
});

// Route for everything else that doesn't match defined routes, should ALWAYS be last because of route order
app.get("*", (req, res) => res.send("You're a noob, there's nothing here!"));
// Tell Express to listen for requests (start server)
app.listen(3000, () => console.log("Server has started."));