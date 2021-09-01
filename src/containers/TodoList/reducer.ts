import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_ITEM,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  todoListActionsTypes,
  SELECT_TODO_UPDATE,
} from "./actions";
import { TodoItemInterface, TodoListInitialState } from "./interface";

const localTodoList = localStorage.getItem("todoList");

const initialState: TodoListInitialState = {
  todoList: localTodoList
    ? (JSON.parse(localTodoList) as TodoItemInterface[])
    : ([] as TodoItemInterface[]),
  isLoading: false,
  newTodoItem: "",
  selectedTodoItem: {
    id: -1,
    value: "",
    isComplete: false,
  },
  newTodoItemID: 0,
};

export const todoListReducer = (
  state: TodoListInitialState = initialState,
  action: todoListActionsTypes
) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        isLoading: false,
      };
    case DELETE_TODO_ITEM:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todoItem) => action.payload !== todoItem
        ),
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((todoItem: TodoItemInterface) => {
          if (action.payload.id !== todoItem.id) return todoItem;
          return action.payload;
        }),
        isLoading: false,
      };
    case SELECT_TODO_UPDATE:
      return {
        ...state,
        selectedTodoItem: action.payload,
      };
    default:
      return state;
  }
};
