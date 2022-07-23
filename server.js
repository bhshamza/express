const express = require ('express')
const app = express()
const fs = require('fs')

const isItOpen = require("./middleware/isItOpen")

app.use(express.static(__dirname+'/public'))
//app.use(express.static(path.join(__dirname, 'public')));
app.use(isItOpen);

app.get('/public/Home.html', (req, res) => {
    fs.readFile('./public/Home.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/public/OurServices.html', (req, res) => {
    fs.readFile('./public/OurServices.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})

app.get('/public/Contact.html', (req, res) => {
    fs.readFile('./public/contact.html', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})


//app.get('/public/Home.html',(req,res)=>{
   // res.sendFile(__dirname+'/public/Home.html')
//})

//app.get('/public/OurServices.html',(req,res)=>{
    //res.sendFile(__dirname+'/public/OurServices.html')
//})



app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('server is run ok port 5000')
})