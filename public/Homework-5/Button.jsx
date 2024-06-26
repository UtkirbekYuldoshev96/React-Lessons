import React from 'react'

export default function Button(props) {
    let  summa = "";

    switch(props.namber){
        case "1":
            summa = "Click";
            break;
        case "2":
            summa = "double click";
            break;
        case "3":
            summa = "hover";
            break;
        case "4":
            summa = "active";
            break;
        default:
            summa = "button ishlamadi";
            break;
    }
    
    return (
    <div>
      <button>{summa}</button>
    </div>
  )
}
