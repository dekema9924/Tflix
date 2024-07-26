
const express = require('express')
const app = express()
const port = 3000;

const Movieroutes = require('./Routes/routes')

app.use('/routes', Movieroutes )

app.listen(port, ()=>{
    console.log(`app open on port ${port}`)
})
