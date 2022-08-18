import {useAppSelector} from '../hooks/index';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const filter = useAppSelector((state) => state.todo.filter);
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  const todosList = filteredTodos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
  return <ul className={classes.list}>{todosList}</ul>;
};

export default TodoList;
