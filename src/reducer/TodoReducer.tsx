import { TodoProps } from "@/types/types"
import { useReducer } from 'react'

type Actions =
  | { type: "add", payload: string }
  | { type: "edit", payload: number }
  | { type: "done", payload: number }


const TodoReducer = (state: TodoProps[], action: Actions) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false }
      ];
    case "edit":
      return state.filter((todo) => todo.id !== action.payload)

    case "done":
      return state.map((todo) => todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo)

    default:
      return state;
  }
}

const ReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>ReducerExample</div>
  )
}

export default ReducerExample

