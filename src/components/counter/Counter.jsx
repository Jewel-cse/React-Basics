import { useState } from 'react';
import './Counter.css';

import CounterButton from './CounterButton';
export default function Counter() {
    //App - > Counter ->CounterButton;
    //parent: Counter , have already increament, decreament function
    //Child : CounterButton : i want to use the parent methods
  //counter level e state maintain
  const [count, setCount] = useState(0);

  function increamentParentCounter(by) {
    setCount(count + by);
  }

  function decreamentParenCounter(by) {
    setCount(count - by);
    }
    function resetCounter() {
        setCount(0);
    }

  return (
    <>
      <span className="Totalcount">{count}</span>
      <CounterButton
        by={1}
        increamentMethod={increamentParentCounter}
        decreamentMethod={decreamentParenCounter}
      />
      <CounterButton
        by={2}
        increamentMethod={increamentParentCounter}
        decreamentMethod={decreamentParenCounter}
      />
      <CounterButton
        by={3}
        increamentMethod={increamentParentCounter}
        decreamentMethod={decreamentParenCounter}
          />
      <button className="resetButton" onClick={resetCounter}>
          Reset
        </button>
    </>
  );
}
