import { useState, useEffect, useReducer} from 'react';
import PocketBase from 'pocketbase';
import TextBox from './TextBox';

const pb = new PocketBase('http://139.177.198.53');

interface Todo {
  id: number;
  text: string;
}

const reducer = (state:Todo[], action) => {
  switch(action.type){
    case
  }
}



const TodoList: React.FC = () => {


  const [todos, dispatch] = useReducer<Todo[]>(reducer);
  const [inputText, setInputText] = useState('');
  const updateList = async () => await pb.collection('task_test').getFullList()
  .then((updatedList) =>{
    updatedList.map((item)=> {
      setTodos(todos =>[...todos, {item.id, item.content} ])
    })
  })
  useEffect( () => {//on first render sync with server
    

    




  },[])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };//this one adds the typed text into the textbox
  
  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        text: inputText,
      };
      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
        <input type="text" value={inputText} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;