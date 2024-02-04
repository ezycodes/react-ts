import { TodoProps } from '@/types/types'
import React from 'react'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd';

interface TodosProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
  CompletedTodos: TodoProps[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}


const TodoList: React.FC<TodosProps> = (
  { todos, setTodos, CompletedTodos, setCompletedTodos }) => {
  return (

    <div className='w-full grid grid-cols-2 gap-4'>
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div className='col-span-2 md:col-span-1 bg-blue-400 p-4'>
            <div className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}>
              <h1 className='text-xl font-bold mb-3'>Active tasks</h1>
              {todos?.map((todo, index) => (
                <SingleTodo key={todo.id}
                  index={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>

      <Droppable droppableId='CompletedTodos'>
        {(provided, snapshot) => (
          <div className='col-span-2 md:col-span-1 bg-blue-300 p-4'>
            <div className={`todos  ${snapshot.isDraggingOver ? "dragcomplete" : "remove"
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            // {...provided.droppableProps}
            >
              <h1 className='text-xl font-bold mb-3'>Completed tasks</h1>
              {CompletedTodos?.map((todo, index) => (
                <SingleTodo
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={CompletedTodos}
                  setTodos={setCompletedTodos} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}

      </Droppable>
    </div >

  )
}

export default TodoList