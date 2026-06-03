"use client";
import React, { useState, useEffect, useRef } from "react";
import { useCounter } from "../hooks/useCounter";
const DemoComponent = () => {
  // const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    counterRef?.current?.focus();
  };
  const { increment, decrement, reset, count } = useCounter(4);
  return (
    <div className="flex flex-col gap-5">
      {/* <input ref={counterRef} />
      {/* <button onClick={() => setCount(count + 1)}>click me </button> */}
      {/* <button onClick={handleFocus}>click me</button>  */}
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default DemoComponent;
