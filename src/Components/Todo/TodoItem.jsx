import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const TodoItem = () => {

  const [single , setSingle] = useState("")

  const todos = useSelector((state) => state.todos)

  const navigate = useNavigate()

  const {id} = useParams()
    // console.log(id)

    const dispatch = useDispatch()


  // console.log(todos.id)

  useEffect(() => {
    fetch(`http://localhost:3000/todos/${id}`)
    .then((res) => res.json())
    .then((res) => setSingle(res))
    
  },[id])

  const goBack = () => {
      navigate('/todos')
  }

    // console.log(todos)
  return (
    <div>
          <h1>{single.id}</h1>
          <h1>{single.name}</h1>
          <h1>{single.status ? "Completed" : "Not Completed"}</h1>
          <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default TodoItem