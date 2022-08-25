// Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environment. 
// getting-started.js 

// **********Setup connection between js and database********

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yashKart1', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database Connected Successfully...");
});

// **********connection setup code ended now***********

// ********Schema*******
const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = "My Name is " + this.name
    // console.log(greeting);
}

// *****Model*****
// a kitten  = kittens(with plural name) name collection is created and save data into the database inside yashKart1 db similary you can add multiple objects
// 'kiiten' is object of kitten here and this object goes into the collection which we have created corresponding to our model 
//  here our model is kitten and object is 'kitten' (inside Model)
var Kitten = mongoose.model('Kitten', kittySchema);

// *****object*****
var harrykittey = new Kitten({ name: 'yashKitty' });
var yash = new Kitten({ name: 'yashKitty1' });
// console.log(harrykittey.name); // 'Silence'
// harrykittey.speak();

harrykittey.save(function (err, harrykitty) {
    if (err) return console.error(err);
    // harrykitty.speak();
});

yash.save(function (err, harrykitty) {
    if (err) return console.error(err);
    // harrykitty.speak();
});
   

//  *****find those object whose name is yashkitty**** 
Kitten.find({ name: "yashKitty" }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})