import React, {useState} from 'react';
import {useAppDispatch} from '../hooks';
import {todoActions} from '../store/todo-slice';

import classes from './TodoForm.module.css';

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState('');

  const submitTodoHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    dispatch(todoActions.addTodo(value));
    setValue('');
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler} className={classes.form}>
      <input
        type='text'
        id='new-todo-input'
        className='input input__lg'
        name='text'
        autoComplete='off'
        placeholder='What needs to be done?'
        onChange={onChangeHandler}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
