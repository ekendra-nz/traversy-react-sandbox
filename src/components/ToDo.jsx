import { useState, useEffect, useRef } from 'react'

function ToDo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})
  const isMounted = useRef(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data)
            setLoading(false)
          }
        }, 3000)
      })
    return () => {
      // Runs when component is unmounted
      isMounted.current = false
    }
  }, [isMounted])

  return loading ? <h5>Loading ...</h5> : <h5>{todo.title}</h5>
}

export default ToDo
