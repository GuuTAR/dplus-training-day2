import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from '../component/TodoItem';
import { deleteTodo, getTodos, postAddTodo, putUpdataTodo } from '../service/todo.service';

const Div = styled.div`
  text-align: center;
`

const TodoPage = () => {
    const [todoLists, setTodoLists] = useState([])
    const [todo, setTodo] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getTodos()
        setTodoLists(result?.data)
    }

    const renderTodos = (todo, idx) => {
        return <TodoItem key={idx} id={todo._id} title={todo.title} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    }

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleAddTodo = async (event) => {
        event.preventDefault()
        // Local state
        const localTodoStuc = {
            _id: todoLists.length,
            title: `${todo} (GuuTAR)`
        }
        if (todo !== "") setTodoLists(todolists => [...todolists, localTodoStuc])

        // Server state
        await postAddTodo({ title: `${todo} (GuuTAR)` })

    }

    const handleUpdate = async (id, data) => {
        // Local state
        setTodoLists(todolists => todolists.map(todo =>
            todo._id === id ? { ...todo, title: `${data} (GuuTAR)` } : todo))

        // Server state
        await putUpdataTodo(id, { title: `${data} (GuuTAR)` })
    }

    const handleDelete = async (id) => {
        // Local state
        setTodoLists(todolists => todolists.filter(todo => todo._id !== id))

        // Server state
        await deleteTodo(id)
    }

    return (
        <Div className="App">
            <h1>What's the Plan for Today</h1>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder="Enter some plan" value={todo} onChange={handleChange} />
                <input type="submit" value="Add" />
            </form>
            <div className="data">
                {todoLists.map(renderTodos)}
            </div>
        </Div>
    );
}

export default TodoPage;