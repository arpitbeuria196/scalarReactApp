import { useState } from "react"

const CreateList = ({inputContext}) => 
{
 const[inputText,setInputText] = useState();
 const handleOnchange = (event)=>
 {
    setInputText(event.target.value);
 }
 const handleAddList = ()=>
 {
    inputContext(inputText);
 }
  return (
    <div>
      <input
      placeholder="enter a value"
      value={inputText}
      onChange={handleOnchange}
      />
      <button onClick={handleAddList}>Add List</button>
    </div>
  )
}

export default CreateList
