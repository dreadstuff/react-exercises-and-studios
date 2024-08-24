import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoeButton from './components/ShoeButton'
import ReportForm from './components/Report'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ShoeButton />
        <ReportForm />
      </div>

    </>
  )
}

export default App
