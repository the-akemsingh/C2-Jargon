import { Client } from "pg";


const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})

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
async function insertHomeData(user_id: number, home_name: string) {
    await client.connect()
    const result = await client.query(`
    INSERT INTO home (user_id, home_name) VALUES ($1, $2)
    `,[user_id, home_name]
    )
    console.log(result)
}
insertHomeData(2, 'home2')