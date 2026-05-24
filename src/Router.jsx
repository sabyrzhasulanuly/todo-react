import { useEffect, useState } from 'react'

const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', onLocationChange)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return { path }
}

export const Router = ({ routes }) => {
  const { path } = useRoute()

  if (path.startsWith('/tasks/')) {
    const id = path.replace('/tasks/', '')
    const TaskPage = routes['/tasks/:id']

    return <TaskPage params={{ id }} />
  }

  const Page = routes[path] ?? routes['*']

  return <Page />
}