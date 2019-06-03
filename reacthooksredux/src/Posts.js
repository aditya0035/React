import React,{useContext,useRef} from 'react'
import TodosAndPostContext from './Context'
const Posts=()=>{
    const {state,dispatch}=useContext(TodosAndPostContext);
    const todos=state.todos
    const inputRef=useRef();
    const AddTodosHanlder=(event)=>{
        event.preventDefault();
        dispatch({type:"AddTodos",payload:inputRef.current.value})
    }
    return(
        <>
        <form onSubmit={AddTodosHanlder}>
        <input type="text" ref={inputRef}></input>
        <button>Add Todos</button>
        </form>
        <div>
        {todos.map(item=>{
            return(
                <div key={item.id}>
                {item.title}
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Posts