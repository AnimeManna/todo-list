import { put, takeLatest, select, all } from "redux-saga/effects";
import { RootReducerState } from "../../rootReducer";
import {
  ADD_TODO_REQUEST,
  addTodoSuccess,
  updateTodoSuccess,
  todoListActionsTypes,
  UPDATE_TODO_REQUEST,
} from "./actions";
import { TodoItemInterface } from "./interface";

const getTodoList = (state: RootReducerState) => state.todoListReducer.todoList;
// В данном случае запись ID в localStorage нужна для того, что бы не было ошибок при перезагрузке страницы и можно было спокойно добавлять дальше элементы,
// не беспокоясь за повторение ID, при наличии сервера который генерирует ID, такое решение не требуется
const localTodoItemID = localStorage.getItem("newTodoItemID");

let newTodoItemID = !!localTodoItemID ? +localTodoItemID : 0;

function* onAddTodoItem(action: todoListActionsTypes) {
  const todoList: [] = yield select(getTodoList);
  try {
    if (
      !todoList.find(
        (todoItem: TodoItemInterface) => todoItem.value === action.payload
      ) &&
      action.payload !== ""
    ) {
      const newTodoItem: TodoItemInterface = {
        id: newTodoItemID++,
        value: action.payload as string,
        isComplete: false,
      };
      localStorage.setItem("newTodoItemID", JSON.stringify(newTodoItemID));
      yield put(addTodoSuccess(newTodoItem));
    }
  } catch (e: any) {
    throw new Error(e);
  }
}

function* onUpdateTodoItem(action: todoListActionsTypes) {
  try {
    if (typeof action.payload !== "string" && action.payload.value !== "") {
      yield put(updateTodoSuccess(action.payload as TodoItemInterface));
    }
  } catch (e: any) {
    throw new Error(e);
  }
}

export default function* todoListSaga() {
  yield all([
    takeLatest(ADD_TODO_REQUEST, onAddTodoItem),
    takeLatest(UPDATE_TODO_REQUEST, onUpdateTodoItem),
  ]);
}
