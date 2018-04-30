// Libraries
const bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express")

// App Configs
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
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

app.listen(3000, () => console.log("Blog is live!"));