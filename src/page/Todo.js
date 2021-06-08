import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from '../component/TodoItem';
import { addTodo, deleteTodos, getTodoLists, updateTodo } from '../redux/todo/actions';
import { deleteTodoAuth, postAddTodoAuth, putUpdataTodoAuth } from '../service/todo.service';

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
    const dispatch = useDispatch()
    const todoLists = useSelector(state => state.todo.todos) || []
    const user_id = useSelector(state => state.user.user_id)

    const [todo, setTodo] = useState("")

    useEffect(() => {
        dispatch(getTodoLists())
    }, [dispatch])

    const renderTodos = (todo, idx) => {
        return <TodoItem key={idx} id={todo._id} title={todo.title} handleDelete={handleDelete} handleUpdate={handleUpdate} />
    }

    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const handleAddTodo = async (event) => {
        event.preventDefault()
        if (todo === "") return

        if (user_id) await postAddTodoAuth({ title: todo })
        else dispatch(addTodo({ title: todo })) 

        setTodo("")
    }

    const handleUpdate = async (id, title) => {
        if (user_id) await putUpdataTodoAuth(id, {_id: id, title})
        else dispatch(updateTodo(id, {_id: id, title}))
    }

    const handleDelete = async (id) => {
        if (user_id) await deleteTodoAuth(id) 
        else dispatch(deleteTodos(id))
    }

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