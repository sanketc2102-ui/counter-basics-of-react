import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount((previousCount) => previousCount - 1)}>
        -
      </button>
      <div>{count}</div>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        +
      </button>
    </div>
  );
}
