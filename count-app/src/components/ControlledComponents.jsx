
import { useState } from "react";
const ControlledComponents = () => {

    const [inputText,setInputText] = useState();

    const handleInputChange = (event)=>
    {
        setInputText(event.target.value)
    }

  return (
    <div>
      <input
      type="text"
      value={inputText}
      onChange={handleInputChange}
      />
    </div>
  )
}

export default ControlledComponents
