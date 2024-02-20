import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  //[0,f]
  const [count, setCount] = useState(0); //use state return an array of current value and function

  function increamentCounter() {
    setCount(count + 1);
  }

  function decreamentCounter() {
    setCount(count - 1);
  }

  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton" onClick={increamentCounter}>
          +1
        </button>
        <button className="counterButton" onClick={decreamentCounter}>
          -1
        </button>
      </div>
    </div>
  );
}
