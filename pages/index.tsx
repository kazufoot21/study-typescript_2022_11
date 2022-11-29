import type {NextPage} from 'next'
import { ChangeEventHandler, FC, useState } from 'react'

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

const Home: NextPage = ()=>{
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(event.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const input: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const add = () =>{
    setTodos((prevTodos)=>{
      return [
        ...prevTodos,
        { id: Math.random(), label: text,isDone: false },
      ]
    })
    setText('')
  }

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" value={text} onChange={input} />
        <button onClick={add}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <ListItem todo={todo} toggle={toggle} />
          </li>
        ))}
      </ul>
    </div>
  );
}

type listItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: FC<listItemProps> = ({ todo, toggle }) => {
  return (
    <label>
      <input
        type="checkbox"
        value={todo.id}
        checked={todo.isDone}
        onChange={toggle}
      />
      <span>{todo.label}</span>
    </label>
  );
};

export default Home