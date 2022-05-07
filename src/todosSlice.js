import { createSlice } from "@reduxjs/toolkit";
const todosSlice = createSlice({
    name: "todo" ,
    initialState:[],
    reducers:{
        createTodo: (state, action) => {
            return [...state, action.payload]
        },
        deleteTodo: (state, action) => {
            let todos = state.filter(todo => todo.id !== action.payload)
            return todos
        },
        toggleTodo: (state, action) => {
            state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        }
    }
})

export const { createTodo, deleteTodo, toggleTodo,  } = todosSlice.actions
export default todosSlice.reducer