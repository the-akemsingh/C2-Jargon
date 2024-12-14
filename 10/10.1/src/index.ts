import { Client } from "pg";

const client =new Client({
    // host:'postgresql://singhakem03:Em6hiMoY7qvl@ep-billowing-shape-a5klhlav.us-east-2.aws.neon.tech/neondb?sslmode=require',
    // port:5334,
    // database:'week 10',
    // user:'raman',
    // password:'akemnoorsingh'

    //for neondb
    connectionString:'postgresql://singhakem03:Em6hiMoY7qvl@ep-billowing-shape-a5klhlav.us-east-2.aws.neon.tech/neondb?sslmode=require'
})
client.connect()

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

async function insertData(username:string,email:string,password:string){
    const result = await client.query(`
        INSERT INTO users(username, email, password)
        VALUES($1, $2, $3)
        `, [username, email, password]);
    console.log(result)
}
// insertData('asdasd','asdasd@gmail.com','123');

async function getuser(email:string){
    const result = await client.query(`
        SELECT * FROM users WHERE email=$1
    `,[email])
    console.log(result.rows)
}
getuser('asdasd@gmail.com')