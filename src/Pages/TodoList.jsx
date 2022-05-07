import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../todosSlice'

export const TodoList = () => {
    const { todos } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <ul>
            {todos.map((todo, index) => {
                return (
                    <li key={todo.id}>
                        <h1 className={`max-w-3xl break-all pr-5 ${todo.completed ? "line-through opacity-50" : " "}`}>
                            {todo.title}
                        </h1>
                        <span className='flex items-center gap-2'>
                            <input onChange={() => dispatch(toggleTodo(todo.id))} type="checkbox" checked={todo.completed} className="checkbox p-2.5" />
                            <button className='btn btn-lg btn-ghost' onClick={() => dispatch(deleteTodo(todo.id))}>-</button>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}
