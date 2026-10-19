import { useState } from "react"
import Vezerlopult from "./components/Vezerlopult"
import Lampa from "./components/Lampa"

const App = () => {
  
  const [ertek, setErtek] = useState<number>(0)
  const novel = () => {
    setErtek( (elozoErtek) =>  elozoErtek+1 )
  }
  const csokkent = () => {
    setErtek( (elozoErtek) =>  elozoErtek-1 )
  }

  return (
    <>
    <h1>Lifting State Up</h1>
    <Vezerlopult></Vezerlopult>
    <Lampa></Lampa>
    </>
  )
}

export default App
