// Libraries
const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

// App inits
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/yelp_camp");

// Mongoose Schema setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

// Mongoose Model
const Campground = mongoose.model("Campground", campgroundSchema);

// Campground creation
// Campground.create({
//     name: "Mountain Goat's Rest",
//     image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1950&q=80"
// }, (err, campground) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Newly created Campground: ")
//         console.log(campground);
//     }
// });

// Routing
// GET routes
app.get("/", (req, res) => res.render("landing"));

app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render("campgrounds", { campgrounds: allCampgrounds })
        }
    });
});

app.get("/campgrounds/new", (req, res) => res.render("new"));

// POST routes
app.post("/campgrounds", (req, res) => {
    // Get data from form and add to Campgrounds array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image };
    campgrounds.push(newCampground)
    // Create a new campground and save to DB
    // Redirect back to campgrounds page
    res.redirect("/campgrounds");
});

// Server init
app.listen(3000, () => console.log("Yelp Camp server is operational..."));