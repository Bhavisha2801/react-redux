import {React , useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { addTodo, deleteTodo, DELETE_TODO, toggleTodo } from '../../Redux/action'

const TodoList = () => {


    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const [data , setData] = useState([])

    const todoItems = useSelector((store)=>(store.todos));

    const {id} = useParams()

    // const todos = useSelector((state) => state.todos)

    function UiDisplay(){
      fetch(`http://localhost:3000/todos`)
      .then((res)=>res.json())
      .then((res)=>dispatch(deleteTodo(res)))
    }
    //  UiDisplay()
    useEffect(()=>{
         UiDisplay()
   },[])
    
    const handleDelete=(id)=>{
  
      fetch(`http://localhost:3000/todos/${id}`,{
        method: 'DELETE',
      })
      .then((res)=>res.json())
      .then((res)=>UiDisplay())
  
      //  dispatch(removeTodo(id))
    }

    
    const toggleTodo=(id,status)=>{
  
      fetch(`http://localhost:3000/todos/${id}`,{
        method: 'PATCH',
        headers:{
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({status:!status})
      })
      .then((res)=>res.json())
      .then((res)=>UiDisplay())
  
      //  dispatch(removeTodo(id))
    }



  return (
    <div>
        {
            todoItems.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1> 
                    <h1>{item.status ? "Completed" : "Not Completed"}</h1>
                    <button onClick={() => toggleTodo(item.id,item.status)}>Toggle Status</button>
                    <button onClick={() => navigate(`/todos/${item.id}`)} >View Todo</button>
                    <button onClick={() => handleDelete(item.id)} >Delete Todo</button>
                </div>
            ))
        }
    </div>
  )
}

export default TodoList