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
const pg_1 = require("pg");
const client = new pg_1.Client({
    // host:'postgresql://singhakem03:Em6hiMoY7qvl@ep-billowing-shape-a5klhlav.us-east-2.aws.neon.tech/neondb?sslmode=require',
    // port:5334,
    // database:'week 10',
    // user:'raman',
    // password:'akemnoorsingh'
    //for neondb
    connectionString: 'postgresql://singhakem03:Em6hiMoY7qvl@ep-billowing-shape-a5klhlav.us-east-2.aws.neon.tech/neondb?sslmode=require'
});
client.connect();
// async function createTable(){
//     const result=await client.query(`
//     CREATE TABLE users(
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) NOT NULL,
//         email VARCHAR(50) NOT NULL,
//         password VARCHAR(50) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     )
//     `)
//     console.log(result)
// }
// createTable();
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        INSERT INTO users(username, email, password)
        VALUES($1, $2, $3)
        `, [username, email, password]);
        console.log(result);
    });
}
// insertData('asdasd','asdasd@gmail.com','123');
function getuser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
        SELECT * FROM users WHERE email=$1
    `, [email]);
        console.log(result.rows);
    });
}
getuser('asdasd@gmail.com');
