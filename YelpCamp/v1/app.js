// Libraries
const express = require("express");
const bodyParser = require("body-parser");

// App inits
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// Campsites array (will be swapped out for MongoDB shortly)
let campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31792cc398fe58a684fd8f30b2a5b360&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31792cc398fe58a684fd8f30b2a5b360&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31792cc398fe58a684fd8f30b2a5b360&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Granite Hill",
        image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa6e65fcad07b9a68420c430034f84f2&auto=format&fit=crop&w=1950&q=80"
    },
    {
        name: "Mountain Goat's Rest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1950&q=80"
    }
]

// Routing
// GET routes
app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => res.render("campgrounds", { campgrounds: campgrounds }));

app.get("/campgrounds/new", (req, res) => res.render("new"));

// POST routes
app.post("/campgrounds", (req, res) => {
    // Get data from form and add to Campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image };
    campgrounds.push(newCampground)
    // Redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// Server init
app.listen(3000, () => console.log("Yelp Camp server is operational..."));