// Libraries
const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose")

// App Configs
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/yelp_camp");

// Mongoose Schema setup
const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// Mongoose Model
const Campground = mongoose.model("Campground", campgroundSchema);

// Create campgrounds **DO NOT REMOVE FOR NOW JUST COMMENT OUT**
// Campground.create(
//     {
//         name: "Mountain Goat's Rest",
//         image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=1950&q=80",
//         description: "Look at all the sleeping mountain goats!"
//     }, (err, campground) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

// Routing
app.get("/", (req, res) => res.render("landing"));

// INDEX - Show all campgrounds
app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render("index", { campgrounds: allCampgrounds })
        }
    });
});

// CREATE - Add new campgrounds to DB
app.post("/campgrounds", (req, res) => {
    // Get data from form and create Object
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = { name: name, image: image, description: desc };
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

// NEW - Show form to create new campground
app.get("/campgrounds/new", (req, res) => res.render("new"));

// SHOW - Show more information about one item
app.get("/campgrounds/:id", (req, res) => {
    // Find the campground with provided ID
    Campground.findById(req.params.id, (err, foundCampground) => {
        if (err) {
            console.log(err)
        }
        else {
            // Render show template with that campground
            res.render("show", { campground: foundCampground });
        }
    });
});

// Server init
app.listen(3000, () => console.log("Yelp Camp server is operational..."));