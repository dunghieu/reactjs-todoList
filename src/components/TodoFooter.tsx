import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {todoActions} from '../store/todo-slice';
import classes from './TodoFooter.module.css';

const TodoFooter = () => {
  const dispatch = useAppDispatch();

  const filter = useAppSelector((state) => state.todo.filter);
  const totalTodos = useAppSelector((state) => state.todo.todos);
  const uncompletedTodos = totalTodos.filter((todo) => !todo.completed);
  const completedTodosExist = totalTodos.length > uncompletedTodos.length;

  const onClearHandler = () => {
    dispatch(todoActions.removeCompletedTodos());
  };

  const onFilterHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(todoActions.setFilter(event.currentTarget.value));
  };

  return (
    <>
      {totalTodos.length > 0 && (
        <div className={classes.footer}>
          <span>{uncompletedTodos.length} item left</span>
          <div className={classes.filter}>
            <button
              onClick={onFilterHandler}
              value='all'
              className={filter === 'all' ? classes.active : ''}
            >
              All
            </button>
            <button
              onClick={onFilterHandler}
              value='active'
              className={filter === 'active' ? classes.active : ''}
            >
              Active
            </button>
            <button
              onClick={onFilterHandler}
              value='completed'
              className={filter === 'completed' ? classes.active : ''}
            >
              Completed
            </button>
          </div>
          {completedTodosExist && (
            <button className={classes.clear} onClick={onClearHandler}>
              Clear completed
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default TodoFooter;
