import { useState } from "react"

export default function Counter({ title }) {
    const [counter, setCounter] = useState(0)

    return (
        <>
            {title}
            <button>+</button>
            {counter}
            <button>-</button>
        </>
    )
}