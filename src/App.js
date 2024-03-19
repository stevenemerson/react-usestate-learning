import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrememntCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrememntCount}>+</button>
    </>
  );
}

export default App;
