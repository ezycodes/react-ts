import { TodoProps } from '@/types/types'
import React from 'react'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd';

interface TodosProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  completedTodos: TodoProps[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}


const TodoList: React.FC<TodosProps> = (
  { todos, setTodos, completedTodos, setCompletedTodos }) => {
  return (

    <div className='w-full grid grid-cols-2 gap-4'>
      <div className='col-span-2 md:col-span-1 bg-blue-400 p-4'>
        <Droppable droppableId='TodosList'>
          {(provided) => (
            <div className='todos'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <h1 className='text-xl font-bold mb-3'>Active tasks</h1>
              {todos.map((todo, index) => (
                <SingleTodo key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>

      <div className='col-span-2 md:col-span-1 bg-blue-300 p-4'>
        <Droppable droppableId='TodosRemove'>
          {(provided) => (
            <div className='todos'
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <h1 className='text-xl font-bold mb-3'>Completed tasks</h1>
              {completedTodos.map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos} />
              ))}
              {provided.placeholder}
            </div>
          )}

        </Droppable>
      </div>

    </div >

  )
}

export default TodoList