import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./TodoReducer"

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos:[
        {
            id: '1',
            title: "Hello World 1",
            description: "This is the first todo",
            completed: false,
        },
        {
            id: '2',
            title: "Hello World 2",
            description: "This is the second todo",
            completed: false,
        },
    ],
    completed:0,
    pending:2
}

interface Props {
    children: JSX.Element | JSX.Element[]  
};

export const TodoProvider = ({ children }:Props) => {
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    const toggleTodo = (id:string) => {
        dispatch({ type: "TOGGLE_TODO", payload: {id} })
    }

  return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    )
}
