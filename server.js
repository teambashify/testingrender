const express = require('express')
const {createServer} = require('http')


const app = express();


const PORT = process.env.PORT || 4000;

const httpserverv =  createServer(app);


app.get("/",(req,res)=>{

    res.json({'connected':true});
})

httpserverv.listen(PORT,()=>{
    console.log("Server is listening on port : 4000");
})
