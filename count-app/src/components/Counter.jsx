import { useState } from "react";

const Counter = ({counter}) => {

    const [count,setCount] = useState(counter);

    const handleIncrement = ()=>
    {
        setCount(count+1)
    }
    const handleDecrement = ()=>
    {
       setCount(count-1);
    }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>Counter value:{count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter
