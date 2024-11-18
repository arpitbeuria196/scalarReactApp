import ControlledComponents from "./components"
import Counter from "./components/counter"

function App() {
  
  return (
    <>
      <Counter counter={1}/>
      <Counter counter={2}/>
      <Counter  counter={3}/>
      <br/>
      <ControlledComponents/>
    </>
  )
}

export default App
