import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CounterButton({
  by,
  increamentMethod,
  decreamentMethod,
}) {
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
