import { useState } from "react"

import "../css/Counter.css"

export default function Counter({ title, onChangeCounter, initCount }) {
  const [counter, setCounter] = useState(Number(initCount))

  const plusCounter = () => {
    const flag = initCount === "1" ? 10 : 8

    if (counter < flag) {
      const newCounter = counter + 1
      setCounter(newCounter)
      onChangeCounter(newCounter)
    }
  }

  const minusCounter = () => {
    if (counter > 1) {
      const newCounter = counter - 1
      setCounter(newCounter)
      onChangeCounter(newCounter)
    }
  }

  return (
    <div className="counterContainer">
      {title}
      <div className="counterControl">
      <button className="counterButton" onClick={plusCounter}>+</button>
      {counter}
      <button className="counterButton"  onClick={minusCounter}>-</button>
      </div>
    </div>
  )
}