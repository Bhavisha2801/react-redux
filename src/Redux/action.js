export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (payload) => {
    return {
        type : ADD_TODO,
        payload
    }
}


export const deleteTodo = (payload) => {
    return {
        type : DELETE_TODO,
        payload
    }
}

export const toggleTodo = (payload) => {
    return {
        type : TOGGLE_TODO,
        payload
    }
}
