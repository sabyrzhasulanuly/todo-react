import { TodoItem } from './TodoItem'

export const TodoList = ({ onDeleteTaskButtonClick, tasks = [] }) => {
  const hasTasks = true

  if (!hasTasks) {
    return <div className="todo__empty-message"></div>
  }

  return (
    <ul className="todo__list">
      {tasks.map((task) => (
        <TodoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          {...task}
        />
      ))}
    </ul>
  )
}
