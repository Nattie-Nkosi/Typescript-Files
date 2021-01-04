import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number,
  title: string,
  completed: boolean
}

axios.get(url).then(response => {
  const todos = response.data as Todo;

  const {id, title, completed} = todos;

  logTodo(id, title, completed);

})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a Title of: ${title}
    Is it Finished: ${completed}
  `);
}