"use client";
import React, { use, useState, useRef, useEffect } from "react";

const UseRefComp = () => {
  //show current count and prev count
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);
  const timerRef = useRef(0);
  const charCounterRef = useRef(0);
  const isLoadingRef = useRef(false);

  const [isRunning, setIsRunning] = useState(false);
  //   const countref = useRef(0);
  //   const inputRef = useRef<HTMLInputElement>(null);

  //   const handleClick = () => {
  //     countref.current++;

  //     console.log("click", countref.current);
  //   };

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, []);

  const handleCurrPrev = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const handleStartTime = () => {
    // timerRef.current = window.setInterval(() => {
    //   console.log("timer...");
    // }, 1000);

    // console.log("timer", timerRef.current);

    setIsRunning(true);
  };

  const handleStopTime = () => {
    // clearInterval(timerRef.current);

    setIsRunning(false);
  };

  const handleCharacter = (e: React.ChangeEvent<HTMLInputElement>) => {
    charCounterRef.current = e.target?.value?.length;

    console.log("charCounterRef", charCounterRef.current);
  };

  useEffect(() => {
    let interval: any;
    if (isRunning) {
      interval = setInterval(() => {
        console.log("timer running", interval);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSubmit = async () => {
    if (isLoadingRef.current) {
      alert("API is already running");
      return;
    }
    try {
      isLoadingRef.current = true;
      console.log("API Call Started");

      await fetch("https://jsonplaceholder.typicode.com/posts");

      console.log("api call completed");
    } catch (err) {
      console.error(err);
    } finally {
      isLoadingRef.current = false;
    }
  };

  return (
    <>
      {/* <h1>useref comp</h1>

      <button onClick={() => handleClick()}>click me</button>

      <hr />
      <input ref={inputRef} /> */}

      <h1>current count{count}</h1>
      <h1>prev count{prevCountRef.current}</h1>

      <button onClick={handleCurrPrev}>click me </button>
      <hr />

      <button onClick={handleStartTime}>start time</button>
      <button onClick={handleStopTime}>stop time</button>

      <hr />

      <input className="border border-amber-400" onChange={handleCharacter} />

      <hr />

      <button onClick={handleSubmit}>handle Submit</button>
    </>
  );
};

export default UseRefComp;
