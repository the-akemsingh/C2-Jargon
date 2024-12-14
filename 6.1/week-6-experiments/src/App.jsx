import { useEffect, useState } from 'react'
import React from 'react'

function App() {
  const [Todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })

    }, 10000);
  }, [])

  return <>
    {Todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)
    }
  </>
}

function Todo({ title, description }) {
  return <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
}
export default App
