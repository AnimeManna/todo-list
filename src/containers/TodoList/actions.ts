import { TodoItemInterface } from "./interface";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST" as const;
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS" as const;
export const DELETE_TODO_ITEM = "DELETE_TODO_ITEM" as const;
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_ITEM" as const;
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS" as const;
export const SELECT_TODO_UPDATE = "CHOOSE_TODO_UPDATE" as const;

export const addTodoRequest = (newTodoItemValue: string) => {
  return { type: ADD_TODO_REQUEST, payload: newTodoItemValue };
};

export const addTodoSuccess = (todoItem: TodoItemInterface) => {
  return { type: ADD_TODO_SUCCESS, payload: todoItem };
};

export const deleteTodoItem = (todoItem: TodoItemInterface) => {
  return { type: DELETE_TODO_ITEM, payload: todoItem };
};

export const updateTodoRequest = (todoItem: TodoItemInterface) => {
  return { type: UPDATE_TODO_REQUEST, payload: todoItem };
};

export const updateTodoSuccess = (todoItem: TodoItemInterface) => {
  return { type: UPDATE_TODO_SUCCESS, payload: todoItem };
};

export const selectTodoItemToUpdate = (todoItem: TodoItemInterface) => {
  return { type: SELECT_TODO_UPDATE, payload: todoItem };
};

export type todoListActionsTypes =
  | ReturnType<typeof addTodoRequest>
  | ReturnType<typeof addTodoSuccess>
  | ReturnType<typeof deleteTodoItem>
  | ReturnType<typeof updateTodoRequest>
  | ReturnType<typeof updateTodoSuccess>
  | ReturnType<typeof selectTodoItemToUpdate>;
