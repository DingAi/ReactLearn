import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const str01: string = "春江潮水连海平"
const num1: number = 1881.69
const num2: number = 13

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <h1>{str01}</h1>
            <h1>{num1+num2}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
