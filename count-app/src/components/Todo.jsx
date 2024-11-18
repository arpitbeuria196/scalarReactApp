import CreateList from "./CreateList"
import TodoList from "./TodoList"
import { useState } from "react";


const Todo = () => {
    const [value,setValue] = useState([]);
const inputContext  = (context)=>
{
   
    setValue((prevValue) => [...prevValue, context]);

}

  return (
    <div>
      <CreateList inputContext ={inputContext}/>
      <TodoList inputValue={value}/>
    </div>
  )
}

export default Todo
