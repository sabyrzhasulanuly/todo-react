import { TasksPage } from './pages/TasksPage'
import { TaskPage } from './pages/TaskPage'
import { Router } from './Router'

export const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <div>404 Page not found</div>,
  }

  return <Router routes={routes} />
}
