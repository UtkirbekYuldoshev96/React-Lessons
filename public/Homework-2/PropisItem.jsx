import React from "react";

export default function PropisItem(props) {
    
    let status = ""
    if (props.num > 50){
        status = "Max"
    }else{
        status = "Min"
    }

    return (
    <div>
      <ul>
        <li>{props.text} {props.num} {status}</li>
      </ul>
    </div>
  );
}
