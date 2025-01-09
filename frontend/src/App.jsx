import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
function App() {
const[jokes , setJokes] = useState([]);
useEffect(()=>{
  //  fetch('/api/jokes')
  //  .then((response)=>(response.json()))
  //  .then((data)=>(setJokes(data)))
  axios('/api/jokes')
  .then((response)=>(
  setJokes(response.data)
))
},[])
  return (
    <>
      <h1>MY APPLICATION</h1>
      <p>Count:{jokes.length}</p>
      <div>
        {jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
