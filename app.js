const express = require('express')
const app = express()

app.get ('/',(req,res)=>{
    res.send('Hello')
})
const PORT = 2051

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})