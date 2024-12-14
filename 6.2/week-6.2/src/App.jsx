import { useCallback, useEffect, useMemo, useState } from 'react'
import { memo } from 'react';
function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setinputValue] = useState(1);
  // const [count, setCount] = useState(0);



  // even though the function is not changing, it referencingly changes but react is not smart enough to know that that why we use useCallBack
  // in case of integer or string it will not change the reference so we don't need to use useCallBack- or we can say it smart enough to know that
  const a = useCallback(() => {
    console.log('a is running');
  }, []);

  let sum = useMemo(() => {
    console.log('sum is running');
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount += i;
    }
    return finalCount;
  }, [inputValue]);


  // useEffect(() => {
  //   let finalCount = 0;
  //   for(let i = 1; i <= inputValue; i++) {
  //   finalCount += i;
  //   }
  //   setCount(finalCount);
  // }, [inputValue]);

  function increaseCount() {
    setCounter(counter + 1);
  }

  return (
    <>
      <input onChange={
        (e) => {
          setinputValue(e.target.value)
        }
      } />

      <br />

      sum from 1  to {inputValue} is {sum}

      <br />

      <button onClick={increaseCount}>counter :{counter}</button>
      <Demo a={a} />
    </>
  )
}

const Demo = memo(function ({ a }) {
  console.log("re render");
  return <div>
    hi there {a}
  </div>
})

export default App
