import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'
import UseCustomHookExample1 from './components/UseCustomHookExample1'
import UseCustomHookExample2 from './components/UseCustomHookExample2'

function App() {
  return (
    <>
      <div className='container mt-5'>
        <UseRefExample1 />
        <hr />
        <UseRefExample2 />
        <hr />
        <UseRefExample3 />
        <hr />
        <UseMemoExample />
        <hr />
        <UseCallbackExample />
        <hr />
        <UseCustomHookExample1 />
        <hr />
        <UseCustomHookExample2 />
      </div>
    </>
  )
}

export default App
