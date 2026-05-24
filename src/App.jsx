import { Todo } from './components/Todo'
import { TasksProvider } from './context/TasksContext'

export const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}
