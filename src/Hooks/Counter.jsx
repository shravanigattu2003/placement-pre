import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([0]);

  const Increment = () => {
    setCount(prevCount => {
      const newData = prevCount + 1;
      setValue(prevValue => [...prevValue, newData]);
      return newData;
    });
  };

  const Decrement = () => {
    setCount(prevCount => {
      const newData = prevCount - 1;
      setValue(prevValue => [...prevValue, newData]);
      return newData;
    });
  };

  const Reset = () => {
    setCount(() => {
      const newData = 0;
      setValue(prevValue => [...prevValue, newData]);
      return newData;
    });
  };

  const btn={
    
    alignItems: "center",
    gap: "5px",
    color: "pink",
    fontWeight: "400" ,
    width : "300px",
    margin: "0 auto"
    
  }

  return (
    <div style={btn}>
      <p>Count: {count}</p>

      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>

      <h2>History</h2>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;