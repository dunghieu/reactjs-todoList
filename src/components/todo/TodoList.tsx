import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { todoActions, toggleAll } from '../../store/todo-slice';

import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

const TodoList = () => {
  const [isToggleAll, setIsToggleAll] = useState(false);

  const dispatch = useAppDispatch();
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

  const isAllTodoCompleted = todos.every((todo) => todo.completed === true);
  useEffect(() => {
    if (isAllTodoCompleted) {
      setIsToggleAll(true);
    } else {
      setIsToggleAll(false);
    }
  }, [isAllTodoCompleted]);

  const toggleAllHandler = () => {
    dispatch(toggleAll(isToggleAll));
    //dispatch(todoActions.toggleAll(!isToggleAll));
  };

  const todosList = filteredTodos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
  return (
    <>
      {todos.length > 0 && (
        <section className={classes.main}>
          <input className={classes.btn} />
          <label htmlFor={classes.btn} onClick={toggleAllHandler}></label>

          <ul className={classes.list}>{todosList}</ul>
        </section>
      )}
    </>
  );
};

export default TodoList;
