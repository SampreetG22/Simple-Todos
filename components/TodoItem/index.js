import './index.css'

const TodoItem = props => {
  const {TodoDetails, deleteTodo} = props
  const {id, title} = TodoDetails

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="indListItem">
      <div className="indTodoContainer">
        <p className="todoTitlePara">{title}</p>
        <button onClick={onDelete} className="deleteBtn" type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
