import { combineReducers } from "redux";
import { todoListReducer } from "./containers/TodoList/reducer";
import { modalReducer } from "./components/Modal/reducer";

export const rootReducer = combineReducers({
  todoListReducer,
  modalReducer,
});

export type RootReducerState = ReturnType<typeof rootReducer>;
