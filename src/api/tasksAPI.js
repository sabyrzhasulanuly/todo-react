const URL = 'http://localhost:3001/tasks'

const headers = {
  'Content-Type': 'application/json',
}

export const tasksAPI = {
  getAll: () => {
    return fetch(URL).then((response) => response.json())
  },

  getById: (id) => {
    return fetch(`${URL}/${id}`).then((response) => response.json())
  },

  add: (task) => {
    return fetch(URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    }).then((response) => response.json())
  },

  delete: (id) => {
    return fetch(`${URL}/${id}`, { method: 'DELETE' })
  },

  deleteAll: (tasks) => {
    return Promise.all(
      tasks.map(({ id }) => tasksAPI.delete(id)),
    )
  },

  toggleComplete: (taskId, isDone) => {
    return fetch(`${URL}/${taskId}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone }),
    })
  },
}
