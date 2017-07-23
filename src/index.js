import React from 'react';
import { render } from 'react-dom';
import './index.css';

const Header = ({ title }) => (
  <h1>{title}</h1>
);

const Recipe = ({ name }) => (
  <li>{ name }</li>
);

class GenericInput extends React.Component {
  handleClick = () => {
    this.props.onAdd(this.elemPointer.value);
    this.elemPointer.value = '';
  };

  render() {
    return (
      <div>
        <input ref={(elem) => this.elemPointer = elem}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

class Recipes extends React.Component {
  constructor() {
    super();

    this.state = {
      recipes: ['Pancake', 'Pizza', 'Cow food'],
    };
  }

  addRecipe = (title) => {
    this.setState({
      recipes: this.state.recipes.concat(title)
    });
  };

  render() {
    return (
      <div>
        <ul>
          {
            this.state.recipes.map(name => <Recipe key={name} name={name}/>)
          }
        </ul>

        <GenericInput age={ 3 } onAdd={ this.addRecipe } />
      </div>
    );
  }
}

const App = () => (
  <div>
    <div>
      <Header title="Recipes:"/>
      <Recipes/>
    </div>
  </div>
);

render(
  <App />,
  document.getElementById('root')
);

