import { useState } from 'react'
import ToDo from './ToDo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      <h2>useRef Example 3</h2>
      <button
        className='btn btn-primary mb-3'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle ToDo
      </button>
      {showTodo && <ToDo />}
    </div>
  )
}

export default UseRefExample3
