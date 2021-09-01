import React from "react";
import { TodoItemProps } from "./interface";
import { useDispatch } from "react-redux";
import {
  deleteTodoItem,
  updateTodoRequest,
  selectTodoItemToUpdate,
} from "../../containers/TodoList/actions";
import styles from "./TodoItem.module.css";
import { openModal } from "../Modal/actions";
import Button from "../Button";

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const dispatch = useDispatch();

  const todoItem = props.item;

  const onDelete = () => {
    dispatch(deleteTodoItem(todoItem));
  };

  const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateTodoRequest({ ...props.item, isComplete: event.target.checked })
    );
  };

  const onEdit = () => {
    dispatch(openModal());
    dispatch(selectTodoItemToUpdate(todoItem));
  };

  return (
    <li className={styles.container}>
      <input
        type="checkbox"
        defaultChecked={props.item.isComplete}
        onChange={onChangeCheckBox}
      />
      <p className={styles.title}>{props.item.value}</p>
      <div className={styles.actions}>
        <Button onClick={onDelete}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </li>
  );
};
