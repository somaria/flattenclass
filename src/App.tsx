import React, { useEffect } from 'react'
import _ from 'lodash'

import { Dictionary } from './InterfaceTypes'

interface firstProps {
  name: string
  month: string
  answers: answerProps[]
}

interface answerProps {
  emotion: number
}

const arrayOne: firstProps[] = [
  { name: 'john', month: 'jan', answers: [{ emotion: 8 }, { emotion: 1 }] },
  { name: 'mike', month: 'feb', answers: [{ emotion: 9 }, { emotion: 3 }] },
  { name: 'mike', month: 'feb', answers: [{ emotion: 6 }, { emotion: 2 }] },
  { name: 'jake', month: 'feb', answers: [{ emotion: 9 }, { emotion: 4 }] },
]

interface flatProps {
  name: string
  pe: number
  ne: number
}

let arrayTwo: flatProps[] = []


const App = () => {
  useEffect(() => {
    arrayOne.map((item) =>
      arrayTwo.push({
        name: item.name,
        pe: item.answers[0].emotion,
        ne: item.answers[1].emotion,
      })
    )
    // console.log(_.groupBy(arrayOne, 'month'))
    const arrayThree: Dictionary<firstProps[]> = _.groupBy(arrayOne, 'month')

    // const arrayFour: [
    //   string,
    //   [{ name: string; month: string; answers: answerProps[] }]
    // ][] = Object.entries(arrayThree)

    const arrayFour: [string, firstProps[]][] = Object.entries(arrayThree)

    console.log(arrayFour)
  }, [])

  return <div>React Typescript</div>
}

export default App
