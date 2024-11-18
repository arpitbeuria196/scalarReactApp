
const TodoList = ({inputValue}) => {
  return (
    <div>
        {inputValue.map((ip,index)=>
        {
           return <p key={index}>{ip}</p>;
        })}
    </div>
  )
}

export default TodoList
