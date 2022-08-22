// static files are those files which you want publically in your server if anyone is found download link 
// for that file so they can download them without any login process

const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// for serving static files      //folder name here
app.use('/static',express.static('static'));

// set the  template engine as pug

app.set('view engine','pug')

// set the views directory
app.set('views',path.join(__dirname,'views'))

// pug demo end point
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Yash', message: 'Hello there and thanks for telling me how to use pubG!' });
});

// app.get("/",(req,res)=>{
//     res.send("This is homepage of my first express app with Yash");
// });

// if you want to send status code
app.get("/",(req,res)=>{
    res.status(200).send("This is homepage of my first express app with Yash");
});


app.get("/about",(req,res)=>{
    res.send("This is the get req of aboutpage of my first express app with Yash");
});

app.post("/about",(req,res)=>{
    res.send("This is the post req of aboutpage of my first express app with Yash");
});

app.get("/this",(req,res)=>{
    res.status(404).send("This page is not found");
});

app.get("/contact",(req,res)=>{
    res.send("This is contactpage of my first express app with Yash");
});

app.listen(port,()=>{
    console.log(`The application start successfully on port ${port}`)
})

// install express using npm instal express to use this page or run and also install pug for this file