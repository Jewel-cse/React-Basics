
import './Counter.css'

export default function Counter() {

    function increamentCounterFunction() {
        console.log('increament clicked')
    }


    return <div className="Counter">
        <span className="count">0</span>
        <div>
            <button className="counterButton" onClick={increamentCounterFunction}>+1</button>
        </div>
  </div>;
}
