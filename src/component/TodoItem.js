import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: center;
    align-items: center;

    column-gap: 10px;
`
const Button = styled.button`
    height: 30px;
`

const TodoItem = ({id, title, handleDelete, handleUpdate}) => {

    const [editing, setEditing] = useState(false)
    const [todo, setTodo] = useState(title || "")


    const onClickUpdate = (id, title) => {
        setEditing(false)
        handleUpdate(id, title)
    }

    const handleChange = (event) => {
        setTodo(event.target.value)
    }    

    if (!editing)
    return (
        <Div className="todo-item">
            <p>{title}</p>
            <Button onClick={() => setEditing(true)}>Edit</Button>
            <Button onClick={() => handleDelete(id)}>Delete</Button>
        </Div>
    );
    else return (
        <Div className="todo-item-editing">
            <input defaultValue={title.replace("(GuuTAR)", "").trim()} onChange={handleChange} />
            <Button onClick={() => onClickUpdate(id, todo)}>Update</Button>
        </Div>
    );
}
 
export default TodoItem;