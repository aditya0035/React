export default function reduer(state,action){
    switch(action.type){
        case "AddTodos":
            let todos=state.todos
            todos.push({id:3,title:action.payload})
            return {
                ...state,
                todos:todos
            };
        default:
            return state
    }
}