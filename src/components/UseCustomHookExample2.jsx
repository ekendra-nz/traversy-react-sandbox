import useLocalStorage from '../hooks/useLocalStorage'

function UseCustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }
    setTasks([...tasks, taskObj])
  }

  return (
    <div>
      <h2>Use Custom Hook Example 2 (Local Storage)</h2>
      <form onSubmit={onSubmit} className='w-35'>
        <label className='form-label'>Task</label>
        <input
          className='form-control'
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      - - - - - - - - - - - - - - - - <br />
      {tasks.map((task) => (
        <h5 key={task.date}>
          {task.task} | {task.completed ? 'completed' : 'not completed'} |{' '}
          {task.date}{' '}
        </h5>
      ))}
    </div>
  )
}

export default UseCustomHookExample2
