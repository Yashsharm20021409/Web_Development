const express = require('express');
const path = require('path');

const app = express();
const port = 80;

//- EXPRESS Specific configuration 
app.use('/static',express.static('static'));

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

//- Star the server
app.listen(port,()=>{
    console.log(`The application start successfully on port ${port}`)
})

// install express using npm instal express to use this page or run and also install pug for this file