import {Component} from 'react'

import './index.css'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  state = {latestTodoList: initialTodosList}

  onDelete = id => {
    const {latestTodoList} = this.state
    const filteredList = latestTodoList.filter(each => each.id !== id)
    this.setState({
      latestTodoList: filteredList,
    })
  }

  render() {
    const {latestTodoList} = this.state

    return (
      <div className="mainContainer">
        <div className="todoCardContainer">
          <h1 className="mainHead">Simple Todos</h1>
          <ul className="todos-list">
            {latestTodoList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                TodoDetails={eachTodo}
                deleteTodo={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
