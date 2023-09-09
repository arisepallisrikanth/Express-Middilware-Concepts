import express from "express";
import morgan from "morgan";
import BodyParser from "body-parser"
import {dirname} from 'path'
import {fileURLToPath} from "url"
var basepath=dirname(fileURLToPath(import.meta.url))
const port=3000
const app=express()
var bandname=''
app.use(BodyParser.urlencoded({extended:true}))

const bandnamegen=(req,res,next)=>{
bandname=req.body.street+req.body.pet
next()
}
app.use(bandnamegen)
app.use(morgan("combined"))
app.get('/',(req,res)=>{
  res.sendFile(basepath+'/public/index.html')
})
app.post('/submit',(req,res)=>{
  res.send(`<h1>Band Generator</h1> <h2>${bandname}</h2>`)
})
app.listen(port,()=>{console.log(`server running on port ${port}`)})