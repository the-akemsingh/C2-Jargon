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
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
});
// async function insertUserData(username: string, password: string,email: string) {   
//     await client.connect()
//     const result = await client.query(`
//     INSERT INTO users (username, password, email) VALUES ($1, $2, $3)
//     `,[username, password, email]
//     )
//     console.log(result)
// }
// insertUserData('nobrokies', 'test', 'nobrokies@gmail.com')
//home table relation to users 
// async function creathometable() {
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE home (
//         home_id SERIAL PRIMARY KEY,
//         user_id INT REFERENCES users(id) ON DELETE CASCADE,
//         home_name VARCHAR(255)
//     )
//     `)
//     console.log(result)
// }
// creathometable()
//insert into home
function insertHomeData(user_id, home_name) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    INSERT INTO home (user_id, home_name) VALUES ($1, $2)
    `, [user_id, home_name]);
        console.log(result);
    });
}
insertHomeData(2, 'home2');
