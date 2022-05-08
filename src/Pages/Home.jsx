import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTodo } from '../todosSlice';
import { TodoList } from './TodoList';

export const Home = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState()

    const submitHandler = (event) => {
        event.preventDefault();
        if (!value.trim()) return ;
        setValue(" ")
        const todo = {
            id: Date.now(),
            title: value,
            completed: false,
        }
        dispatch(createTodo(todo))
    }

    return (
        <form value={value} onSubmit={submitHandler} className="card w-96 glass p-9 gap-3 " >
            <div className="input-group">
            <input value={value} onChange={(event) => setValue(event.target.value)} type="text" placeholder="Type here ..." class="input input-bordered input-md w-full max-w-xs" />
            <div className="">
            <button className='btn'> ADD TODO</button>
            </div>
            </div>
            <TodoList/>
        </form>
    )
}
