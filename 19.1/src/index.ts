import { error } from 'console'
import express from 'express'
import {WebSocketServer} from 'ws'
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello World')
})
const httpServer=app.listen(3000,()=>{console.log("http server on")});

const wsServer=new WebSocketServer({server:httpServer});

wsServer.on("connection",(onServer)=>{
    onServer.on("error",()=>{
        console.log(error);
    })
    onServer.on("message",(data,isbinary)=>{
        wsServer.clients.forEach((client)=>{
            if(client.readyState===WebSocket.OPEN){
                client.send(data,{binary:isbinary});
            }
        });
    });
    onServer.send("Web socket connection established");
});