import React from 'react'

export default function FooterForm(props) {
  return (
    <>
      <button disabled={props.userInput ? false : true} type="submit">Convert</button>
      <div className='result'>{props.result}</div>
    </>
  )
}
