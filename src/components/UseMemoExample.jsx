import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(108)
  const [inc, setInc] = useState(0)

  const renders = useRef(1)

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const onClick = () => {
    setInc((prevState) => {
      // console.log(prevState + 1)
      return prevState + 1
    })
  }

  useEffect(() => {
    renders.current = renders.current + 1
  })

  return (
    <div>
      <h2>useMemo Example</h2>
      <h5>Renders: {renders.current}</h5>
      <h5 className='my-3'>
        The square root of {number} is {sqrt}{' '}
      </h5>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />
      <button className='btn btn-primary' onClick={onClick}>
        Re-Render
      </button>
    </div>
  )
}

function getSqrt(n) {
  console.log('Expensive function called')
  for (let i = 0; i <= 5000; i++) {}
  return Math.sqrt(n)
}

export default UseMemoExample
