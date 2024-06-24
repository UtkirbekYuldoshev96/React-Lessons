import React from "react";
import Card from "./Card";

export default function App() {
  return (
    <>
      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
