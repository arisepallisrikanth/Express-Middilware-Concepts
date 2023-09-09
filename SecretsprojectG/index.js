//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import BodyParser from "body-parser"
import {dirname} from "path"
import {fileURLToPath} from "url"
var base_path=dirname(fileURLToPath(import.meta.url))
const app=express()
const port=3000
app.listen(port,()=>{
    console.log(`Server running on port${port}`)
})
app.use(BodyParser.urlencoded({extended:true}))
var authenticate=false
const authentication=(req,res,next)=>{
    const Password=req.body["password"]
    if(Password==='ILoveProgramming'){
        authenticate=true
    }
    next()
}
app.use(authentication)
app.get('/',(req,res)=>{
    res.sendFile(base_path+'/public/index.html')
})
app.post('/check',(req,res)=>{
    if(authenticate){
    res.sendFile(base_path+'/public/secret.html')}
    else{
    // res.sendFile(base_path+'/public/index.html')
    res.redirect('/')

    }
})