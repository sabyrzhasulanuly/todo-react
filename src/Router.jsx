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
  const Page = routes[path] ?? routes['*']

  return <Page />
}