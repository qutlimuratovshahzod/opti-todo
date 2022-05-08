import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../todosSlice'
import {RiDeleteBin5Line} from "react-icons/ri"
export const TodoList = () => {
    const { todos } = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <ul className=' w-96 p-9 m-auto'>
            {todos.map((todo, index) => {
                return (
                    <li  className='' key={todo.id}>
                        <div className="flex justify-between items-center"> 
                        <h1 className={`max-w-3xl break-all pr-5 ${todo.completed ? "line-through opacity-50" : " "}`}>
                            {todo.title}
                        </h1>
                        <span className=''>
                            <input onChange={() => dispatch(toggleTodo(todo.id))} type="checkbox" checked={todo.completed} className="checkbox p-2.5" />
                            <button className='btn btn-lg btn-ghost' onClick={() => dispatch(deleteTodo(todo.id))}><RiDeleteBin5Line/></button>
                        </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
