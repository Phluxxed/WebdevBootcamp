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
    // Get data from form and create Object
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image };
    // Create a new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if (err) {
            console.log(err)
        }
        else {
            // Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// Server init
app.listen(3000, () => console.log("Yelp Camp server is operational..."));