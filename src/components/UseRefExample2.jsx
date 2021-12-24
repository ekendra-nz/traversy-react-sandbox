import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const renders = useRef(1)
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h2>useRef Example 2</h2>
      <h5>Renders: {renders.current} </h5>
      <h5>Previous Name State: {prevName.current}</h5>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />
    </div>
  )
}

export default UseRefExample2
