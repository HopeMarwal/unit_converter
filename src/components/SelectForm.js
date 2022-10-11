import React from 'react'

export default function SelectForm(props) {
  return (
    <select
      onChange={props.handleChange}
      name={props.name}
      id={props.id}
    >
      {props.options}
    </select>
  )
}
