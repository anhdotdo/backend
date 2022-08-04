const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json({
        mesg: 'Hello Backend, I am anh do'
    })
})

app.listen(3000)