const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

const Post = require("./Models/post");
const User = require("./Models/user");



// User.create(
//     {
//         email: "bob@gmail.com",
//         name: "Bob Pinciotti"
//     }
// );

Post.create(
    {
        title: "How to cook the best burger pt. 4",
        content: "266513165131251"
    }, (err, post) => {
        User.findOne({ email: "bob@gmail.com" }, (err, foundUser) => {
            if (err) {
                console.log(err)
            }
            else {
                foundUser.posts.push(post);
                foundUser.save((err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(data);
                    }
                });
            }
        });
    }
);

// Find user
// Find all posts for user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec((err, user) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });