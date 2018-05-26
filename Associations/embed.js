const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// // Create new user
// let newUser = new User({
//     email: "bruh@gmail.com",
//     name: "Brobeans",
// });

// // Push new posts into new user
// newUser.posts.push({
//     title: "How to be a bro",
//     content: "You can't learn to be a bro, you're born into it!"
// });

// // Getting new user into db
// newUser.save((err, user) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// // Create new post
// let newPost = new Post({
//     title: "Reflection on apples",
//     content: "They are delicious and nutritious!"
// });

// newPost.save((err, post) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

User.findOne({name: "Brobeans"}, (err, user) => {
    if (err) {
        // console.log(err);
    }
    else {
        user.posts.push({
            title: "3 things about being a bro",
            content: "Bro hard, drink like a bro, eat like a bro"
        });
        user.save((err, user) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(user);
            }
        });
    }
});