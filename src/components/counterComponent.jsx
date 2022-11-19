import React, { useState } from "react";
import { useEffect } from "react";
import "./counterComponent.css";

function Counter(props) {
  /*const [count, setState] = useState(0);*/

  useEffect(() => {
    console.log(count);
  });

  /*return (
    <div className="main-section">
      <button onClick={() => setState(count - 1)}>Decrement</button>
      <div className="count-text-display">Counter: {count}</div>
      <button onClick={() => setState(count + 1)}>Increment</button>
    </div>
  );*/
  const [count, setState] = useState(0);
  const increase = () => {
    setState((count) => count + 1);
  };
  const resetCount = () => {
    setState(0);
  };

  const decrease = () => {
    if (count > 0) {
      setState((count) => count - 1);
    }
    if (count <= 0) {
      return alert("you should not decrement the count below zero");
    }
  };

  let Addedbutton = () => {
    let Dynamicdisp = count > 10 ? "block" : "none";
    return (
      <button
        className="two"
        style={{ display: Dynamicdisp, margin: "auto" }}
        onClick={resetCount}
      >
        GO BACK TO 0
      </button>
    );
  };
  return (
    <div className="main-section">
      <button className="one" onClick={decrease}>
        Decrement
      </button>
      <div className="count-text-display">Count: {count}</div>
      <button className="one" onClick={increase}>
        Increment
      </button>
      <Addedbutton />
    </div>
  );
}
export default Counter;
