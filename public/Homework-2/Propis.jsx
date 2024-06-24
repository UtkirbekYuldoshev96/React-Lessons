import React from "react";
import PropisItem from "./PropisItem";

export default function Propis(props) {

let num1 = 10;
let num2 = 20;
let num3 = 30;
let countK = 2;
  return (
    <div>
      <PropisItem text="React" num = {num1 * countK}/>
      <PropisItem text="Vue" num = {num2 * countK}/>
      <PropisItem text="Angular" num = {num3 * countK}/>
    </div>
  );
}
