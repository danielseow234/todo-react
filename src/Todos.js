import React, { useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

function Todos () {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const removeTodo = check => {
        setTodos(todos.filter(todo => {
            return todo.id !== check
        }))
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (input !== '') {
            setTodos([...todos, {
                id: Math.floor(Math.random() * 1000),
                value: input,
            }]);
            setInput('');
        }
    };

    const editTodo = (id, value) => {
        setInput(value);
        removeTodo(id);
    }

    const TodoList = todos => {
        return (
            <div>
                {todos.map(({id, value}) =>
                    <p key={id}>
                        {value}
                        <FaEdit onClick={() => editTodo(id, value)} />
                        <FaTrash onClick={() => removeTodo(id)} />
                        <br/>
                    </p>
                )}
            </div>
        )
    }

    return (
        <div className='center'>
            <h1>Todo program</h1>
            <form onSubmit={handleSubmit}>
                <label>Todo:</label>
                <input value={input} name="name" onChange={handleChange}/>
                <button>Submit</button>
            </form>
            <div>
                {TodoList(todos)}
            </div>
        </div>
    )
}

export default Todos;