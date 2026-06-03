import { useState } from "react";
export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    increment,
    decrement,
    reset,
    count,
  };
}
