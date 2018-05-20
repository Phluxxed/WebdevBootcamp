// Libraries
const bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require("mongoose"),
    express = require("express"),
    expressSanitizer = require("express-sanitizer");

// App Configs
const app = express();
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost/restful_blog_app");

// Mongoose Schema Setup
const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

// Mongoose Model Setup
const Blog = mongoose.model("Blog", blogSchema);

// RESTful Routes
app.get("/", (req, res) => res.redirect("/blogs"));

// INDEX Route
app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index", { blogs: blogs });
        }
    });
});

// NEW Route
app.get("/blogs/new", (req, res) => res.render("new"));

// CREATE Route
app.post("/blogs", (req, res) => {
    // Create blog
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, (err, newBlog) => {
        if (err) {
            res.render("new");
        }
        else {
            // Redirect to the Index
            res.redirect("/blogs");
        }
    })
});

// SHOW Route
app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect("/blogs");
        }
        else {
            res.render("show", { blog: foundBlog });
        }
    })
});

// EDIT Route
app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, foundBlog) => {
        if (err) {
            res.redirect("/blogs")
        }
        else {
            res.render("edit", { blog: foundBlog })
        }
    });
});

// UPDATE Route
app.put("/blogs/:id", (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedBlog) => {
        if (err) {
            res.redirect("/blogs")
        }
        else {
            res.redirect("/blogs/" + req.params.id);
        }
    })
});

// DELETE Route
app.delete("/blogs/:id", (req, res) => {
    // Destroy blog
    Blog.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
        }
        // Redirect
        else {
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, () => console.log("Blog is live!"));