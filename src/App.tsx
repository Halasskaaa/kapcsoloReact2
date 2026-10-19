import { useState } from "react"
import Vezerlopult from "./components/Vezerlopult"
import Lampa from "./components/Lampa"

const App = () => {
  
  const [ertek, setErtek] = useState<number>(0)
  const [bekapcsolva, setBekapcsolva] = useState(false)
  const novel = () => {
    setErtek( (elozoErtek) =>  elozoErtek+1 )
  }
  // const csokkent = () => {
  //   setErtek( (elozoErtek) =>  elozoErtek-1 )
  // }

  const lampaKapcsolasa = () => {
    setBekapcsolva((elozo)=>!elozo)
    console.log(bekapcsolva)
  }
  return (
    <>
    <h1>Lifting State Up</h1>
    <Vezerlopult 
      novel={novel}
      lampaKapcsolasa={lampaKapcsolasa}>
    </Vezerlopult>
    <Lampa ertek={ertek}></Lampa>
    </>
  )
}

export default App
