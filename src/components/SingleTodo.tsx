import { TodoProps } from "@/types/types"
import { Check, Delete, Edit, Trash, Trash2 } from "lucide-react";

interface SingleTodoProps {
  todo: TodoProps;
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
}

const SingleTodo: React.FC<SingleTodoProps> = ({ todo, todos, setTodos }) => {
  return (
    <form action="" className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>

      <div className="flex justify-end items-center flex-row gap-2">
        <button className="p-1 bg-blue-600 hover:bg-blue-700">
          <Edit />
        </button>

        <button className="p-1 bg-blue-600 hover:bg-blue-700">
          <Trash2 />
        </button>

        <button className="p-1 bg-blue-600 hover:bg-blue-700">
          <Check />
        </button>

      </div>
    </form>
  )
}

export default SingleTodo