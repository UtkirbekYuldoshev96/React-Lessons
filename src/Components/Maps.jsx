import React from 'react'

export default function Maps(props) {

    let infoCar = "";
    if (props.card.price > 50_000){
        infoCar = "Expersion Card";
    }else{
        infoCar = "Simple Card";
    }

  return (
    <>
      <h2>Maps Componets</h2>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.card.color}</li>
        <li>{props.card.price} {infoCar}</li>
        <li>{props.card.devName}</li>
      </ul>
    </>
  )
}
