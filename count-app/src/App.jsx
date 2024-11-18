import ControlledComponents from "./components"
import Counter from "./components/counter"
import Todo from "./components/Todo"

function App() {
  
  return (
    <>
      <Counter counter={1}/>
      <Counter counter={2}/>
      <Counter  counter={3}/>
      <br/>
      <ControlledComponents/>
      <br/>
      <Todo/>
    </>
  )
}

export default App
