import InputField from '@/components/InputField'
import { useState } from 'react';
import { TodoProps } from './types/types';
import TodoList from './components/TodoList';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Array<TodoProps>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }

  }

  console.log(todos)

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>

      <InputField todo={todo} setTodo={setTodo}
        handleAdd={handleAdd} />

      <div className='my-5 space-y-4 w-full'>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
