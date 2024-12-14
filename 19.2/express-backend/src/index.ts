import express from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());

const redisclient = createClient();
redisclient.on("error", (err) => {
  console.log("Redis Client error:", err);
});


app.post("/submit",async(req,res)=>{
    const problemId=req.body.problemId;
    const code=req.body.code;
    const language=req.body.language;

    try{
        await redisclient.lPush("problems",JSON.stringify({problemId,code,language}));
        //code for storing in DB
        res.status(201).send("code submitted");
    }
    catch(e){
        console.log("Error while submitting the code : ",e);
    }
})

async function startServer() {
    try{
        await redisclient.connect();
        console.log("Redis Connected");

        app.listen(3000,()=>{
            console.log("express server listening at port 3000");
        })
    }
    catch(e){
        console.log(e);
    }
}
startServer();
