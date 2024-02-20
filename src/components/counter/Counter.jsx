import { useState } from 'react';
import './Counter.css';

export default function Counter({by}) {  //by is an object
  //[0,f]
  const [count, setCount] = useState(0); //use state return an array of current value and function

  function increamentCounter() {
    setCount(count + by);
  }

  function decreamentCounter() {
    setCount(count - by);
  }

  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton" onClick={increamentCounter}>
          +{by}
        </button>
        <button className="counterButton" onClick={decreamentCounter}>
          -{by}
        </button>
      </div>
    </div>
  );
}
