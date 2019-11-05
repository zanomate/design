import * as React from 'react'

interface TestProps {
  num: number
  str: string
}

const Test = (props) => {
  const {num, str} = props
  return (
    <div>
      {`Stringa ${str} con number ${num}`}
    </div>
  )
}

export default Test
