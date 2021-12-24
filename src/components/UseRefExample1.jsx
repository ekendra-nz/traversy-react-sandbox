import { useRef } from 'react'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    inputRef.current.style.backgroundColor = 'pink'
    paraRef.current.innerHTML =
      '<strong>' +
      inputRef.current.value +
      '</strong> is a bad input. Do it right and try again.'
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <h2>useRef Example 1</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          ref={inputRef}
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p ref={paraRef}></p>
      </form>
    </div>
  )
}

export default UseRefExample1
