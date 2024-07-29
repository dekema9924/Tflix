
const express = require('express')
const app = express()
const port = 3000;
const axios = require('axios')
const Movieroutes = require('./Routes/routes')

app.use('/routes', Movieroutes )



app.get('/', (req,res)=>{
    res.redirect('/routes')
})





app.listen(port, ()=>{
    console.log(`app open on port ${port}`)
})
