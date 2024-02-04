import { TodoProps } from "@/types/types"
import { Check, Edit, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  index: number;
  todo: TodoProps;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const SingleTodo = (
  { index, todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleEdit(todo.id);
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input value={editTodo}
              ref={inputRef}
              onKeyDown={handleKeyDown}
              onChange={(e) => setEditTodo(e.target.value)}
              className="input__box text-slate-900" />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}


          <div className="flex justify-end items-center flex-row gap-2">
            <button type="button" onClick={(e) => {
              e.preventDefault();
              if (!edit && !todo.isDone) { setEdit(!edit) }
            }}
              className="p-1 bg-blue-600 hover:bg-blue-700">
              <Edit />
            </button>

            <button onClick={(e) => {
              e.preventDefault()
              handleDelete(todo.id)
            }}
              className="p-1 bg-blue-600 hover:bg-blue-700">
              <Trash2 />
            </button>

            <button onClick={(e) => {
              e.preventDefault()
              handleDone(todo.id)
            }}
              className="p-1 bg-blue-600 hover:bg-blue-700">
              <Check />
            </button>

          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleTodo


