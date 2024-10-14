import { useState, useEffect } from "react"

export default function Counter({ title, onChangeCounter }) {
  const [counter, setCounter] = useState(1)

  const plusCounter = () => {
    const newCounter = counter + 1
    setCounter(newCounter)
    onChangeCounter(newCounter)
  }

  const minusCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      onChangeCounter(newCounter)
    }
  }

  return (
    <>
      {title}
      <button onClick={plusCounter}>+</button>
      {counter}
      <button onClick={minusCounter}>-</button>
    </>
  )
}