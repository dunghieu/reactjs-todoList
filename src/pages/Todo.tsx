import Wrapper from '../components/layout/Wrapper';
import TodoFooter from '../components/todo/TodoFooter';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

const Todo = () => {
  return (
    <>
      <header className="centered">
        <p>Todos</p>
      </header>
      <Wrapper>
        <TodoForm />
        <TodoList />
        <TodoFooter />
      </Wrapper>
    </>
  );
};

export default Todo;
