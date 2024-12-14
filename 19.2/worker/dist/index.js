"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisclient = (0, redis_1.createClient)();
function processCode(submission) {
    return __awaiter(this, void 0, void 0, function* () {
        const { problemId, code, language } = JSON.parse(submission.element);
        console.log(submission);
        //logic for solving or processing code
        //artificial delay
        yield new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("finished processing");
    });
}
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield redisclient.connect();
            console.log("worker connected");
            while (1) {
                try {
                    const submission = yield redisclient.brPop("problems", 0);
                    yield processCode(submission);
                }
                catch (e) {
                    console.error("Error processing submission:", e);
                }
            }
        }
        catch (e) {
            console.log("error occured at worker server : ", e);
        }
    });
}
startServer();
