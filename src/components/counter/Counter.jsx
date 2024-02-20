import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  //[0,f]
  const [count, setCount] = useState(0); //use state return an array of current value and function

  function increamentCounterFunction() {
    setCount(count + 1);
    //console.log(count)
    //console.log('increament clicked')
  }

  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton" onClick={increamentCounterFunction}>
          +1
        </button>
      </div>
    </div>
  );
}
