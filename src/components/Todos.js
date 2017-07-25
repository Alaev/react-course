import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'Divide into components', completed: true },
        { title: 'Add state', completed: true },
        { title: 'Make dynamic', completed: false }
      ]
    };
  }

  render() {
    return (
      <ul className="todo-list">
        {
          this.state.todos.map(todo =>
            <Todo key={ todo.title } todo={ todo } />)
        }


      </ul>
    );
  }
}

export default Todos;