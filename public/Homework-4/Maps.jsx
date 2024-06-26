import React from "react";

export default function Maps(props) {
  // const {data } = props;
  // const {obj, userName, age} = data;
  // const {color, name, price} = obj;

  let infoCar = "";
  if (props.card.price > 50_000) {
    infoCar = "Expersion Card";
  } else {
    infoCar = "Simple Card";
  }

  let movies = [
    "Uyda yolgiz",
    "Jannat",
    "Jeck Chitak",
    "Karib dengizi",
    "Mumuio",
  ];

  return (
    <>
      <h2>Maps Componets</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.card.color}</li>
        <li>
          {props.card.price} {infoCar}
        </li>
        <li>{props.card.devName}</li>
      </ul>

      <h3>Map</h3>
      <ul>
            {movies.map((item, index) => {
                return <li>{index + 1}. {item}</li>
        })} 
      </ul>
    </>
  );
}
