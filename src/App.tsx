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
  { name: 'john', month: 'jan', answers: [{ emotion: 4 }, { emotion: 5 }] },
  { name: 'mike', month: 'feb', answers: [{ emotion: 4 }, { emotion: 5 }] },
  { name: 'jake', month: 'feb', answers: [{ emotion: 4 }, { emotion: 5 }] },
]

let arrayTwo: flatProps[] = []

const App = () => {
  useEffect(() => {
    console.log(arrayOne)
    arrayOne.map((item) =>
      arrayTwo.push({
        name: item.name,
        pe: item.answers[0].emotion,
        ne: item.answers[1].emotion,
      })
    )
    console.log(arrayTwo)
  }, [])

  return <div>React Typescript</div>
}

export default App
