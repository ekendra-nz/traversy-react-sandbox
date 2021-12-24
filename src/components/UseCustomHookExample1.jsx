import useFetch from '../hooks/useFetch'

function UseCustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return (
      <>
        <h2>Use Custom Hook Example 1 (Fetch)</h2>
        <h5>Loading ...</h5>
      </>
    )
  }
  return (
    <div>
      <h2>Use Custom Hook Example 1 (Fetch)</h2>
      {data.map((post) => (
        <h5 key={post.id}>{post.title}</h5>
      ))}
    </div>
  )
}

export default UseCustomHookExample1
