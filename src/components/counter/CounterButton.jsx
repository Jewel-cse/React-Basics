
import PropTypes from 'prop-types';

export default function CounterButton({
  by,
  increamentMethod,
  decreamentMethod,
}) {
  
  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={()=>increamentMethod(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={()=>decreamentMethod(by)}>
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
