import { Field } from './Field'

export const SearchTaskForm = ({ onSearchInput }) => {
  return (
    <form className="todo__form">
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        onInput={(event) => onSearchInput(event.target.value)}
      />
    </form>
  )
}
