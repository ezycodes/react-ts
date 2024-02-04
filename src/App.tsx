import { useState } from 'react';
import { TodoProps } from './types/types';
import InputField from '@/components/InputField'
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Array<TodoProps>>([])
  const [CompletedTodos, setCompletedTodos] = useState<Array<TodoProps>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }

  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    const active = todos;
    const complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <span className='heading'>Taskify</span>

        <InputField todo={todo} setTodo={setTodo}
          handleAdd={handleAdd} />

        <div className='my-5 space-y-4 w-full'>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            CompletedTodos={CompletedTodos}
            setCompletedTodos={setCompletedTodos} />
        </div>
      </div>
    </DragDropContext >
  )
}

export default App
