"use client";
import React, { useState } from "react";

// Render
export default function Page() {
  const [number, setNumber] = useState(10);
  let a = 10;

  function buttonClicked() {
    setNumber(number + 1);
    a = a + 1;
  }

  return (
    <div>
      <p>page {number}</p>
      <p>page {a}</p>
      <button onClick={buttonClicked}>increase</button>
    </div>
  );
}
