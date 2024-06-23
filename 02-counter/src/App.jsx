import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    console.log(counter); // prevCounter
    // all the state get batch and only last update get might effect on re-render
  };

  const incrementCountCorrect = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // we use callback fn in setCounter method to update the prevCounter all gets update bcz each update is based on most recent update
  };

  const decrementCount = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={incrementCountCorrect}>Increment Counter</button>{" "}
        {"  "}
        <button onClick={decrementCount}>Decrement Counter</button>
      </div>
    </>
  );
}

export default App;
