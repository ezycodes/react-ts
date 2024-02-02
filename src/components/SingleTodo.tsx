import { TodoProps } from "@/types/types"
import { Delete, Edit } from "lucide-react";

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
        <Edit />
        <Delete />
      </div>
    </form>
  )
}

export default SingleTodo