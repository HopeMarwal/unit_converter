import React from 'react'
import SelectForm from './SelectForm'

export default function BodyForm(props) {
  const mapFromTo = props.itemToMap().map((item) => {
    return (
      <option key={item.value} value={item.value}>{item.name}</option>
    )
  })
  return (
    <>
      <label htmlFor="from">From</label>
      <SelectForm
        handleChange={props.handleChangeFrom}
        name="from"
        id="from"
        options={mapFromTo}
      />

      <label htmlFor="to">To</label>
      <SelectForm
        handleChange={props.handleChangeTo}
        name="to"
        id="to"
        options={mapFromTo}
      />
    </>
  )
}
