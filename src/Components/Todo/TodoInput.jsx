import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../Redux/action'
import { v4 as uuid } from 'uuid'
import { useNavigate ,useParams } from 'react-router-dom'

const TodoInput = () => {

    const navigate = useNavigate()

    const [name , setName] = useState("")

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    // const tid = useSelector((state) => state.todos.tid)
    // console.log(tid , "jfhfh")


    const abs = useParams()
    console.log(abs,"dndjd")




    const handleAdd = () => {

        fetch(`http://localhost:3000/todos`,{
            method : 'post',
            body: JSON.stringify({
                name,
                id : uuid(),
                status : false,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then((res) => dispatch(addTodo(res)))
        navigate('/todos')
    }

  return (
    <div>
        <input type='text' placeholder='Enter Todo' onChange={handleChange} />
        <button onClick={() => handleAdd()}>Add TODO</button>
    </div>
  )
}

export default TodoInput