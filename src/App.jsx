import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">daisyUI <br/>example</div>
      </div>

    </>
  )
}

export default App
