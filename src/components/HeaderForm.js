import React from 'react'
import SelectForm from './SelectForm'

export default function HeaderForm(props) {
  const mapCategory = props.category.map((item) => {
    return (
      <option key={item.id} value={item.value}>{item.name}</option>
    )
  })
  return (
    <>
      <SelectForm
        handleChange={props.handleChangeSelect}
        name="category"
        id="category"
        options={mapCategory}
      />

      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        id="amount"
        value={props.value}
        onChange={props.handleChangeInput}
      />
    </>
  )
}
