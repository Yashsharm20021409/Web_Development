const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 80;

//- EXPRESS Specific configuration 
app.use('/static',express.static('static'));
app.use(express.urlencoded());

//- PUG Specific configuration

app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

 
//- ENDPOINTS
app.get('/',(req,res)=>{
    // make variables and pass to pug file
    const con = "In this project we will use pug template";
    const var1 = {'title':'pubg is the best game',"content":con}
    res.status(200).render('index.pug',var1);
})

app.post('/',(req,res)=>{
    // console.log(req.body); // make object and print the user data

    // data is always excess using name not by id or class name
    name1 = req.body.name;
    age = req.body.age;
    Gender = req.body.Gender;
    Email = req.body.Email;
    address = req.body.address;
    more = req.body.more;
    let UserData = `The Name of The client is ${name1},${age} year old,residing at ${address}.More about him/her ${more},contact info about him/her ${Email}`;
    fs.writeFileSync('Output.txt',UserData);

    const var1 = {'message':'Form Submit Successfully'};
    res.status(200).render('index.pug',var1);
});

//- Star the server
app.listen(port,()=>{
    console.log(`The application start successfully on port ${port}`)
})

// install express using npm instal express to use this page or run and also install pug for this file