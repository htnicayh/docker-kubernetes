import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function getJobs() {
      await fetch('http://localhost:5000', {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((response) => {
        setJobs(response)
      })
      .catch((e) => {
        console.log(e)
      })
    }

    getJobs()
  }, [jobs.length])

  const handleCreate = async () => {
    await fetch('http://localhost:5000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description: input })
    })
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      setJobs((prev) => {
        return [
          res,
          ...prev
        ]
      })
      setInput('')
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return (
    <div className='app'>
      <div>
        <label>Jobs: </label> <br />
        <input placeholder='Enter Jobs' value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
        <button onClick={handleCreate}>Add</button>
      </div>
      <br />
      <div className='list-job'>
        <h2>List Jobs:</h2>
        <ul>
          {jobs ? jobs.map((job, index) => {
            return (
              <li key={index}>
                {job.description}
              </li>
            )
          }) : null}
        </ul>
      </div>
    </div>
  )
}

export default App