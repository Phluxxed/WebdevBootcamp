const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
const User = mongoose.model("User", userSchema);

// User.create(
//     {
//         email: "bob@gmail.com",
//         name: "Bob Pinciotti"
//     }
// );

// Post.create(
//     {
//         title: "How to cook the best burger pt. 3",
//         content: "asdgdfsgsdfgdsfgdsfgsdfgdf"
//     }, (err, post) => {
//         User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 foundUser.posts.push(post);
//                 foundUser.save((err, data) => {
//                     if (err) {
//                         console.log(err);
//                     }
//                     else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// );

// Find user
// Find all posts for user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});