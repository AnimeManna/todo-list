import { all } from "redux-saga/effects";
import todoListSaga from "./containers/TodoList/saga";

export const rootSaga = function* root() {
  yield all([todoListSaga()]);
};
