import { useState } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

export default function Counter() {
  //counter level e state maintain
  const [count, setCount] = useState(0);

  function increamentParentCounter(by) {
    setCount(count + by);
    }
    
    function decreamentParenCounter(by) {
        setCount(count - by);
  }

  return (
    <>
      <span className="Totalcount">{count}</span>
      <CounterButton by={1} increamentMethod={increamentParentCounter} decreamentMethod = {decreamentParenCounter}/>
      <CounterButton by={2} increamentMethod={increamentParentCounter} decreamentMethod = {decreamentParenCounter}/>
      <CounterButton by={3} increamentMethod={increamentParentCounter} decreamentMethod = {decreamentParenCounter}/>
    </>
  );
}

function CounterButton({ by, increamentMethod ,decreamentMethod}) {
  //by is an object
  //[0,f]
  const [count, setCount] = useState(0); //use state return an array of current value and function

  function increamentCounter() {
    setCount(count + by);
    increamentMethod(by);
  }

  function decreamentCounter() {
    setCount(count - by);
      decreamentMethod(by);
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

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};
