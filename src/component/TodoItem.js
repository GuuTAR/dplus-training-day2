import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: center;

    margin-bottom: 5px;
    column-gap: 10px;

    border: #eeeeee solid 0.1rem;

    width: 40vw;
    padding: 0px 10px 0px 10px;
`

const Button = styled.button`
    color: white;
    border: none;

    height: 36px;
    width: 50px;
`

const EditButton = styled(Button)`
    background-color: #94d0cc;
`

const DeleteButton = styled(Button)`
    background-color: #f55c47;
`

const UpdateButton = styled(Button)`
    background-color: #1fae98;
`

const Input = styled.input`
    margin: 10px 0px 10px 0px;

    width: 500px;
    height: 30px;

    border: #cccccc solid 0.05rem;
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
            <div>
                <EditButton onClick={() => setEditing(true)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(id)}>Delete</DeleteButton>
            </div>   
        </Div>
    );
    else return (
        <Div className="todo-item-editing">
            <Input defaultValue={title.replace("(GuuTAR)", "").trim()} onChange={handleChange} />
            <UpdateButton onClick={() => onClickUpdate(id, todo)}>Update</UpdateButton>
        </Div>
    );
}
 
export default TodoItem;