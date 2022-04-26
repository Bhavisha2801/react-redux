import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./action";

let initState = { id : 1, name : "code" , status : false  }

export const reducer = (store = initState , action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...store,
                todos : [ ...store.todos , action.payload ]
            }
        case DELETE_TODO:
            return {
                todos : action.payload
            }  
        case TOGGLE_TODO:
            return {
                ...store,
                todos : [ ...store.todos , store.todos.status = !store.todos.status ]
            }   
            
            
        default:
            return store
    }
}