import React from 'react'

export default function Input(props) {
  return (
    <div>
        <label htmlFor={props.id}>{props.placeholder}</label>
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
  )
}
