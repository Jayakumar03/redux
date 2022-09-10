
import {ADD_TODO, REMOVE_TODO} from "./action-types"

// action carring which action and what action to perfrom
export const addTodo = (todo) => ({

    type:ADD_TODO,
    payload:todo
})


export const removeTodo = (id) => ({

    type:REMOVE_TODO,
    payload:id
})
