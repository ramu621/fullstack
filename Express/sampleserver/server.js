const express=require('express')

const Port=4000
const app=express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json("hello");
    
})

app.listen(Port,( )=>{
    console.log("server is running in port :"+Port)
})

