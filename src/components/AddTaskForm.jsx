import { Field } from './Field'
import { Button } from './Button'

export const AddTaskForm = ({ addTask }) => {
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
      />
      <Button type="submit">Add</Button>
    </form>
  )
}
