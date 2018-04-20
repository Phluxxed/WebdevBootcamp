const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("search")
});

app.get("/results", (req, res) => {
    let movieSearch = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + movieSearch + "&apikey=thewdb";
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let data = JSON.parse(body)
            res.render("results", { data: data });
        }
    });
});

app.listen(3000, () => console.log("You're on the air..."));