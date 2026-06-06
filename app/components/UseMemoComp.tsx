"use client";
import React, { useState, useMemo } from "react";

const UseMemoComp = () => {
  const [count, setCount] = useState(0);

  //   const sum = (() => {
  //     let total = 0;
  //     console.log("calculating...");
  //     for (let i = 0; i < 100000; i++) {
  //       total += i;
  //     }
  //     return total;
  //   })();

  const sumMemo = useMemo(() => {
    console.log("using memo");
    let total = 0;
    for (let i = 0; i < 100000; i++) {
      total += i;
    }
    return total;
  }, []);
  return (
    <>
      <h1>Usememo</h1>
      {/* <h2>{sum}</h2> */}
      <h2>{sumMemo}</h2>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

export default UseMemoComp;
