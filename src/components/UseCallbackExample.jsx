import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <h2>useCallback Example</h2>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered')

  return (
    <div>
      <button onClick={addTask} className='btn btn-primary mb-3'>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
