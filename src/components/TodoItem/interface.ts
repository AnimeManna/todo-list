import React from "react";
import { TodoItemInterface } from "../../containers/TodoList/interface";

export interface TodoItemProps {
  item: TodoItemInterface;
  onEdit: () => void;
}
