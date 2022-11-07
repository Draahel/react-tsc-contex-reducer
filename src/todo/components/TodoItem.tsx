import { useTodos } from '../hooks/useTodos'
import { Todo } from '../interfaces/interfaces'

interface Props {
    todo: Todo 
}

export const TodoItem = ({todo}: Props) => {

  const { toggleTodo } = useTodos()

  const handleDbClick = () => {
    toggleTodo(todo.id)
  }

  return (
    <li style={{
      cursor: 'pointer',
      textDecoration: todo.completed ? 'line-through' : ''
    }} onDoubleClick={handleDbClick}>
        {todo.title}
    </li>
  )
}
