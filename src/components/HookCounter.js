import React, {useState, useEffect} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0) //array destructuring
  const [name, setName] = useState('')

  useEffect(() => { //useEffect runs after every render
    console.log('useEffect - updating document title');
    document.title = 'You clicked ${count} times'
  }, [count]) //in [], effect needs to be executed when count value changes
  //if the value is not changed between renders, the effect is not run 

  return (
    <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  )
}

export default HookCounter
