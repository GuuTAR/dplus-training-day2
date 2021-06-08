import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fetchAPI, increment } from "../redux/test/actions";

const TodoRedux = () => {

    const counterState = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    const [diff, setDiff] = useState(0)

    useEffect(() => {
        dispatch(fetchAPI('https://jsonplaceholder.typicode.com/posts'))
    }, [dispatch])

    const handleIncrement = () => {
        dispatch(increment(diff))
    }
    const handleDecrement = () => {
        dispatch(decrement(diff))
    }

    return ( 
    <div style={{display: "flex", alignItems:"center", flexFlow:"column wrap"}}>
        <h2>Redux</h2>
        <h2>{counterState}</h2>
        <input onChange={(e) => setDiff(parseInt(e.target.value))}/>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
        {}
    </div> 
    );
}
 
export default TodoRedux;