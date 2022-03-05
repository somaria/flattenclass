import React, { useEffect } from 'react'
import _ from 'lodash'

interface Props {
  name: string
  month: string
  answers: answerProps[]
}

interface answerProps {
  emotion: number
}

interface flatProps {
  name: string
  pe: number
  ne: number
}

const arrayOne: Props[] = [
  { name: 'john', month: 'jan', answers: [{ emotion: 8 }, { emotion: 1 }] },
  { name: 'mike', month: 'feb', answers: [{ emotion: 9 }, { emotion: 3 }] },
  { name: 'mike', month: 'feb', answers: [{ emotion: 6 }, { emotion: 2 }] },
  { name: 'jake', month: 'feb', answers: [{ emotion: 9 }, { emotion: 4 }] },
]

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
    console.log(arrayTwo)
    console.log(_.groupBy(arrayOne, 'month'))
  }, [])

  return <div>React Typescript</div>
}

export default App
