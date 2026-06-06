"use client";
import React, { useCallback, useState, useRef, useEffect } from "react";
import ChildComp from "./ChildComp";

const UseCallbackComp = () => {
  const [count, setCount] = useState(0);
  const prevRef = useRef<(() => void) | null>(null);

  //   const handleClick = () => {
  //     console.log("handleClick");
  //   };

  const handleClick = useCallback(() => {
    console.log("handleClick");
  }, []);

  useEffect(() => {
    if (prevRef.current === handleClick) {
      console.log("same refernce");
    } else {
      console.log("new refernce created");
    }
    prevRef.current = handleClick;
  });
  return (
    <>
      <h1>UseCallbackComp {count}</h1>

      <ChildComp onClick={handleClick} />

      <button onClick={() => setCount(count + 1)}>parent click me</button>
    </>
  );
};

export default UseCallbackComp;
