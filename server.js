const express = require('express')
const {createServer} = require('http')


const app = express();

const httpserverv =  createServer(app);


app.get("/",(req,res)=>{

    res.json({'connected':true});
})

httpserverv.listen(4000,()=>{
    console.log("Server is listening on port : 4000");
})
