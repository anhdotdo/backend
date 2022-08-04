const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json({
        mesg: 'Hello Backend, I am Anh Do'
    })
})

app.listen(3000)