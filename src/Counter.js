import React, { useState } from "react";

function DisplayCount({count}) {
  return (
    <h1>{count}</h1>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    return setCount(count + 1)
  }

  function decrement() {
    return setCount(count - 1)
  }

  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <DisplayCount count={count}/>
            <button className="btn btn-success mx-3" onClick={increment}>Increment</button>
            <button className="btn btn-danger mx-3" onClick={decrement} disabled={count === 0}>Decrement</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Counter;
