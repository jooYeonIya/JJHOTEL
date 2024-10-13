import { useState } from "react"

export default function Counter({ title }) {
    const [counter, setCounter] = useState(0)

    const plusCounter = () => {
        setCounter(counter + 1)
    }

    const minusCounter = () => {
        setCounter(counter + 1)
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