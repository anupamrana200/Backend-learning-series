import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jocks, setJocks] = useState([])
  useEffect(()=> {
    axios.get('/api/jocks')
    .then((response) => {
      setJocks(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })

  return (
    <>
        <h1>Tutorial for connect backend with frontend</h1>
        <h2>Total jocks: {jocks.length}</h2>
        {
        jocks.map((joke) => (
          <div key={joke.id}>
            <h4>{joke.title}</h4>
            <p>{joke.content}</p>
          </div>
        ))
        }

    </>
  )
}

export default App
