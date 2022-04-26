import {legacy_createStore} from 'redux';
import {reducer} from './reducer'


export const store = legacy_createStore(reducer , {
    todos: [{ id : 1, name : "code" , status : false  }]
})


