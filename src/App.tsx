import React, { useEffect } from 'react'
import _ from 'lodash'

interface Props {}

const anArray = [
  { name: 'john', month: 'jan' },
  { name: 'mike', month: 'feb' },
  { name: 'jake', month: 'feb' },
]

const App = () => {
  useEffect(() => {
    console.log(anArray)
    console.log(_.groupBy(anArray, 'month'))
  }, [])

  return <div>React Typescript</div>
}

export default App
