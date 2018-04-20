const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/fallinlovewith/:thing", (req, res) => {
    let thing = req.params.thing;
    res.render("love", {
        thingVar: thing
    });
});

app.get("/posts", (req, res) => {
    let posts = [
        { title: "Post 1", author: "Me" },
        { title: "Definitely the second post", author: "Still me" },
        { title: "Bruh post 3", author: "Also me" },
    ];

    res.render("posts", { posts: posts });
})



app.listen(3000, () => console.log("Server is listening..."));