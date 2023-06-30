import { FormEvent } from 'react';

import { createTodo } from '@/apis/todo';
import useInput from '@/hooks/useInput';
import useTodos from '@/hooks/useTodos';

const TodoCreator = () => {
  const { value, onChange, resetValue } = useInput({ todo: '' });
  const { dispatch } = useTodos();

  const handleCreateTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createTodo({ todo: value.todo }).then(({ data }) => {
      dispatch({ type: 'CREATE', todo: data });
      resetValue();
    });
  };

  return (
    <form onSubmit={handleCreateTodo} className="create-form">
      <input
        name="todo"
        placeholder="새로운 투두를 입력해보세요!"
        value={value.todo}
        onChange={onChange}
        data-testid="new-todo-input"
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
};

export default TodoCreator;