import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      Promise.all(
        tasks.map(({ id }) => {
          return fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'DELETE',
          })
        }),
      ).then(() => setTasks([]))
    }
  }, [tasks])

  const deleteTask = useCallback((taskId) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: 'DELETE',
    }).then(() => setTasks(tasks.filter(({ id }) => id !== taskId)))
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone }),
    }).then(() => setTasks(tasks.map((task) => task.id === taskId ? { ...task, isDone } : task)))
  }, [tasks])

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    }

    fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    }).then((response) => response.json())
      .then((addedTask) => {
        setTasks((prevTasks) => [...prevTasks, addedTask])
        setNewTaskTitle('')
        setSearchQuery('')
        newTaskInputRef.current.focus()
      })
  }, [])

  useEffect(() => {
    newTaskInputRef.current.focus()

    fetch('http://localhost:3001/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
  }, [])

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
      : null
  }, [searchQuery, tasks])

  return {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  }
}
