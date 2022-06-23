import React, { useState } from "react";

const Counter = ({ start = 0 }) => {
  const [count, setCount] = useState(start);

  const incrementCounter = () => setCount((c) => c + 1)

  return <button onClick={incrementCounter}>Valor: {count}</button>;
};

export default Counter;
