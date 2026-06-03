"use client";
import React, { useEffect, useState } from "react";

const DebounceComp = () => {
  const [input, setInput] = useState("");
  const [debouncevalue, setDebounceValue] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(input);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [input]);

  useEffect(() => {
    console.log("Debounced Value:", debouncevalue);
  }, [debouncevalue]);

  return (
    <>
      <h1>Debounce </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black"
      />
    </>
  );
};

export default DebounceComp;
