import React from 'react'

const TodosAndPostContext=React.createContext({
    todos:[
        {id:1,title:'buy milk'},
        {id:2,title:'Party'}
    ],
    Posts:[{id:1,Post:'Hello World'}]
})

export default TodosAndPostContext;