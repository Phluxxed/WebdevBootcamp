const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// Adding a new cat to the database

// let norris = new Cat({
//     name: "Mrs. Norris",
//     age: 14,
//     temperament: "Evil"
// })

// norris.save((err, cat) => {
//     if (err) {
//         console.log("Something went wrong!")
//     }
//     else {
//         console.log("We just saved a cat to the database:")
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Shitty cat",
    age: 15,
    temperament: "Bland"  
}, (err, cat) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});

// Retrieve all cats from database and console.log each one

Cat.find({}, (err, cats) => {
    if (err) {
        console.log("Error, error!");
        console.log(err);
    }
    else {
        console.log("All the cats!");
        console.log(cats);
    }
});