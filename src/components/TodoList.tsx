import { TodoProps } from '@/types/types'
import React from 'react'
import SingleTodo from './SingleTodo'

interface TodosProps {
  todos: TodoProps[],
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}
const TodoList: React.FC<TodosProps> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList