 
import './App.css'
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "workout for 1 hour",
    completed: false

  }, {
    title: "go to LA",
    description: "midnight in background",
    completed: true
  }]);

  function addTodo() {
    setTodos([...todos, {
      title: "new todo",
      description: "new description",
      completed: false
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>
        Add a random todo
      </button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}
export default App   