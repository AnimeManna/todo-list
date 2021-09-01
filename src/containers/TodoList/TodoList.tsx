import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoRequest,
  updateTodoRequest,
  selectTodoItemToUpdate,
} from "./actions";
import { closeModal } from "../../components/Modal/actions";
import TodoItem from "../../components/TodoItem";
import { RootReducerState } from "../../rootReducer";
import Modal from "../../components/Modal";
import { TodoItemInterface } from "./interface";
import styles from "./TodoList.module.css";
import Button from "../../components/Button";

export const TodoList: React.FC = () => {
  const [addTodoInputValue, setAddTodoInputValue] = useState<string>("");
  const [updateTodoInputValue, setUpdateTodoInputValue] = useState<string>("");

  const dispatch = useDispatch();
  const todoList = useSelector(
    (state: RootReducerState) => state.todoListReducer.todoList
  );

  const selectedTodoItem = useSelector(
    (state: RootReducerState) => state.todoListReducer.selectedTodoItem
  );

  // Обновляем localStorage добвляя в него текущий todoList что бы не терять его при перезагрузке
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onChangeInputAddTodoItem = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAddTodoInputValue(event.target.value);
  };

  const onChangeInputUpdateTodoItem = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdateTodoInputValue(event.target.value);
  };

  const onCreateTodoItem = () => {
    dispatch(addTodoRequest(addTodoInputValue));
  };

  const onEditModalTodoItem = (todoItem: TodoItemInterface) => {
    dispatch(selectTodoItemToUpdate(todoItem));
  };

  const onUpdateTodoItemValue = () => {
    dispatch(
      updateTodoRequest({ ...selectedTodoItem, value: updateTodoInputValue })
    );
    dispatch(closeModal());
  };

  return (
    <main className={styles.container}>
      <div className={styles.createTodo}>
        <p>Create new Todo</p>
        <input onChange={onChangeInputAddTodoItem} type="text" />
        <Button onClick={onCreateTodoItem}>Add</Button>
      </div>
      <ul>
        {todoList.map((todoItem: TodoItemInterface) => (
          <TodoItem
            item={todoItem}
            key={todoItem.id}
            onEdit={() => onEditModalTodoItem(todoItem)}
          />
        ))}
      </ul>
      <Modal>
        <input
          type="text"
          defaultValue={selectedTodoItem.value}
          onChange={onChangeInputUpdateTodoItem}
        />
        <Button onClick={onUpdateTodoItemValue}>Update</Button>
      </Modal>
    </main>
  );
};
