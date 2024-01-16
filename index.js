import express from 'express'
import 'dotenv/config'
const app=express()

app.get('/',(req,res)=>{
    res.send("hello new server")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Welcome to login Page</h1>")
})

const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})