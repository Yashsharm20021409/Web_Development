const express = require('express');

const app = express();
const port = 80;

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

// install express using npm instal express to use this page or run