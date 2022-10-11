import React, { useState } from 'react'
import './converter.scss'
import HeaderForm from './HeaderForm'
import BodyForm from './BodyForm'
import FooterForm from './FooterForm'

export default function Converter() {
  //state 
  const [selectedCategory, setSelectedCategory] = useState('lg')
  const [userInput, setUserInput] = useState('')
  const [convertFrom, setConvertFrom] = useState('km')
  const [convertTo, setConvertTo] = useState('km')
  const [result, setResult] = useState('')

  //const variables
  const categories = [
    {
      name: 'length',
      id: 1,
      value: 'lg',
      options: [
        {
          name: 'kilometers',
          value: 'km',
          multiplicator: 1,
        },
        {
          name: 'meters',
          value: 'm',
          multiplicator: 1000,
        },
        {
          name: 'inch',
          value: 'inch',
          multiplicator: 39370.1,
        },
        {
          name: 'centimeters',
          value: 'cm',
          multiplicator: 100000,
        },
        {
          name: 'millimeters',
          value: 'mm',
          multiplicator: 1000000,
        }
      ]
    },
    {
      name: 'volume',
      id: 2,
      value: 'vol',
      options: [
        {
          name: 'liters',
          value: 'l',
          multiplicator: 1,
        },
        {
          name: 'pints',
          value: 'pt',
          multiplicator: 1759.754,
        },
        {
          name: 'millilitres',
          value: 'ml',
          multiplicator: 1000,
        }
      ]
    },
    {
      name: 'weight',
      id: 3,
      value: 'wt',
      options: [
        {
          name: 'tons',
          value: 'ton',
          multiplicator: 1,
        },
        {
          name: 'kilograms',
          value: 'kg',
          multiplicator: 1000,
        },
        {
          name: 'ounces',
          value: 'oz',
          multiplicator: 35273.96,
        },
        {
          name: 'grams',
          value: 'gr',
          multiplicator: 1000000,
        }
      ]
    },
  ]

  const itemToMap = () => {
    let options;
    for (const category of categories) {
      category.value === selectedCategory && (options = category.options)
    }
    return options
  }

  const handleChangeCategory = (e) => {
    const target = e.target.value
    setSelectedCategory(target)
    setResult(null)

    switch (target) {
      case ('lg'):
        setConvertFrom('km')
        setConvertTo('km')
        break;
      case ('vol'):
        setConvertFrom('l')
        setConvertTo('')
        break;
      default:
        setConvertFrom('ton')
        setConvertTo('ton')
    }
  }

  const handleChangeUser = (e) => {
    setResult(null)
    const target = e.target.value
    regex.test(target) ? setUserInput(target) : e.preventDefault()
  }

  const handleChangeFrom = (e) => {
    setResult(null)
    setConvertFrom(e.target.value)
  }

  const handleChangeTo = (e) => {
    setResult(null)
    setConvertTo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let selectFrom;
    let selectTo;
    for (const category of categories) {
      if (category.value === selectedCategory) {
        for (const option of category.options) {
          convertFrom === option.value && (selectFrom = option.multiplicator)
          convertTo === option.value && (selectTo = option.multiplicator)
        }
      }
    }
    const res = ((userInput / selectFrom) * selectTo).toFixed(4)
    const fullResult = `${userInput}${convertFrom} = ${res}${convertTo}`
    setResult(fullResult)
  }

  return (
    <div className="converter">
      <form onSubmit={handleSubmit}>

        <HeaderForm
          handleChangeSelect={handleChangeCategory}
          handleChangeInput={handleChangeUser}
          category={categories}
          value={userInput}
        />

        <BodyForm
          handleChangeFrom={handleChangeFrom}
          handleChangeTo={handleChangeTo}
          itemToMap={itemToMap}
        />

        <FooterForm
          userInput={userInput}
          result={result}
        />
      </form>
    </div>
  )
}

const regex = /^[0-9]*\.?[0-9]*$/
