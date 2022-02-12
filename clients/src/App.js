import React, { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {
  const [jobs, setJobs] = useState([])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

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
    inputRef.current.focus()
  }, [])

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE'
    })
    await fetch('http://localhost:5000', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      setJobs(response)
    })
  }

  const handleCreate = async (e) => {
    if (e.keyCode === 13) {
        await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description: input })
      })
      .then((response) => response.json())
      .then((response) => {
        setJobs((prev) => {
          return [
            ...prev,
            response
          ]
        })
      })
      setInput('')
    }
  }

  return (
    <div className='app'>
      <form onKeyDown={(e) => {
          handleCreate(e)
        }}>
        <label>Jobs:</label> <br />
        <input ref={inputRef} placeholder='Enter Jobs' value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
        <button>Add</button>
      </form>
      <br />
      <div className='list-job'>
        <h2>List Jobs:</h2>
        <ul>
          {jobs ? jobs.map((job, index) => {
            return (
              <li key={index} onClick={() => {
                handleDelete(job._id)
              }}>
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