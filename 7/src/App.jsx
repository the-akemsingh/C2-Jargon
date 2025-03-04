import React, { useContext,useState } from 'react'
import { CountContext } from './context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>

    </>
  )
}

function Count({ setCount}) {
  return <div>
    <CountRenderer  />
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>

    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>
  </div>
}

export default App
