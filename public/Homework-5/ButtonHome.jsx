import React from "react";
import Button from "./Components/Button";

export default function App() {
  let animals = ["cat", "cow", "lion", "rabbit", "snake", "ark"];

  animals.sort();

  return (
    <>
      <ul>
        {
          animals.map((item, index) => {
            return <li>{item.toUpperCase()}</li>
          })
        }
      </ul>
      <Button namber="4" />
    </>
  );
}
