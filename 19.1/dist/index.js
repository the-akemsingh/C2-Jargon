"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World');
});
const httpServer = app.listen(3000, () => { console.log("http server on"); });
const wsServer = new ws_1.WebSocketServer({ server: httpServer });
wsServer.on("connection", (onServer) => {
    onServer.on("error", () => {
        console.log(console_1.error);
    });
    onServer.on("message", (data) => {
        wsServer.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
    onServer.send("Web socket connection established");
});
