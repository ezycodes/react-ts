import InputField from '@/components/InputField'
import { useState } from 'react';
import { TodoProps } from './types/types';
import TodoList from './components/TodoList';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Array<TodoProps>>([])
  const [completedTodos, setCompletedTodos] = useState<Array<TodoProps>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }

  }

  console.log(todos)

  return (
    <DragDropContext>
      <div className='App'>
        <span className='heading'>Taskify</span>

        <InputField todo={todo} setTodo={setTodo}
          handleAdd={handleAdd} />

        <div className='my-5 space-y-4 w-full'>
          <TodoList todos={todos} setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos} />
        </div>
      </div>
    </DragDropContext >
  )
}

export default App
