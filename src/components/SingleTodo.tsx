import { TodoProps } from "@/types/types"
import { Check, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

interface SingleTodoProps {
  todo: TodoProps;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)} >
      {edit ? (
        <input value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="input__box text-slate-900" />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}


      <div className="flex justify-end items-center flex-row gap-2">
        <button onClick={() => {
          if (!edit && !todo.isDone) { setEdit((prev) => !prev); console.log(edit) }
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
  )
}

export default SingleTodo