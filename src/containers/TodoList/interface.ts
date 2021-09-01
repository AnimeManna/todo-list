export interface TodoItemInterface {
  id: number;
  value: string;
  isComplete: boolean;
}

export interface TodoListInitialState {
  todoList: TodoItemInterface[];
  newTodoItem: string;
  isLoading: boolean;
  selectedTodoItem: TodoItemInterface;
  newTodoItemID: number;
}
