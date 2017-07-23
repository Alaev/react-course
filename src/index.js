import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = ({ title }) => (
  <h1>{title}</h1>
);

const Recipe = ({ name }) => (
  <li>{ name }</li>
);

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Pancake', 'Pizza', 'Cow food'],
    };

    // setTimeout(() => {
    //
    //   this.setState({
    //     recipes: this.state.recipes.concat('Hello')
    //   });
    //
    // }, 2000);
  }

  handleClick = () => {
    console.log('Woosh ' + this.elemPointer.value);

    this.setState({
      recipes: this.state.recipes.concat(this.elemPointer.value)
    });

    this.elemPointer.value = '';
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(name => <Recipe key={name} name={name}/>)
          }
        </ul>

        <input ref={ (elem) => this.elemPointer = elem } />

        <button onClick={ this.handleClick }>Add</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header title="Recipes:"/>
          <Recipes/>
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);

