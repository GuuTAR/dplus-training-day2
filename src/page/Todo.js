import { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from '../component/TodoItem';
import { getUserInfo } from '../service/auth.service';
import { deleteTodo, deleteTodoAuth, getTodos, postAddTodo, postAddTodoAuth, putUpdataTodo, putUpdataTodoAuth } from '../service/todo.service';

const Div = styled.div`
    text-align: center;
`

const DataDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;

    margin-top: 10px;
`

const Input = styled.input`
    padding-left: 20px;

    width: 500px;
    height: 30px;

    border: #cccccc solid 0.05rem;
`

const AddButton = styled.input`
    background-color: #1fae98;
    color: white;
    border: none;

    height: 33.6px;
    width: 50px;
`

const TodoPage = () => {
    const [todoLists, setTodoLists] = useState([])
    const [todo, setTodo] = useState("")

    const [loadFinish, setLoadFinish] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const result = await getTodos()
        setTodoLists(result?.data)
        setLoadFinish(true)
    }

    const renderTodos = (todo, idx) => {
        return <TodoItem key={idx} id={todo._id} title={todo.title} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    }

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleAddTodo = async (event) => {
        event.preventDefault()

        const result = getUserInfo().user_id? 
        await postAddTodoAuth({ title: todo }) : await postAddTodo({ title: todo }) 

        if (todo !== "") setTodoLists(todolists => [
            ...todolists, {
            _id: result.data._id,
            title: todo}
        ])
        setTodo("")
    }

    const handleUpdate = async (id, data) => {
        const result = getUserInfo().user_id? 
        await putUpdataTodoAuth(id, { title: data }) : await putUpdataTodo(id, { title: data })
        if(!result.error) setTodoLists(todolists => todolists.map(todo =>
            todo._id === id ? { ...todo, title: data } : todo))
    }

    const handleDelete = async (id) => {
        const result = getUserInfo().user_id? await deleteTodoAuth(id) : await deleteTodo(id) 
        if (!result.error) setTodoLists(todolists => todolists.filter(todo => todo._id !== id))
    }

    if (!loadFinish) return <Div></Div>
    return (
        <Div className="App">
            <h1>What's the Plan for Today</h1>
            <form onSubmit={handleAddTodo}>
                <Input type="text" placeholder="Enter some plan" value={todo} onChange={handleChange} />
                <AddButton type="submit" value="Add" />
            </form>
            <DataDiv className="data">
                {todoLists.map(renderTodos)}
            </DataDiv>
        </Div>
    );
}

export default TodoPage