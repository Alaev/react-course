import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Header from './components/Header';
import GenericInput from './components/GenericInput';

const Recipe = ({ name }) => (
  <li>{ name }</li>
);

const Recipes = ({ recipes }) => (
  <div>
    <ul>
      {
        recipes.map(name => <Recipe key={name} name={name}/>)
      }
    </ul>
  </div>
);

class App extends React.Component {
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
        <div>
          <Header title="Recipes:"/>

          <Recipes recipes={ this.state.recipes } />

          <GenericInput onAdd={ this.addRecipe } />
        </div>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);

