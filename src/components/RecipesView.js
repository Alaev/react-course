import React from 'react';
import Recipes from './Recipes';
import AddRecipe from './AddRecipe';

class RecipesView extends React.Component {

  toggleRecipes = (recipe) => {
    recipe.favorite = !recipe.favorite;
    this.forceUpdate();
  };

  render() {
    return (
      <div className="main">
        <div className="pane">
          <Recipes toggle={ this.toggleRecipes }/>
        </div>

        <div className="pane">
          <AddRecipe />
        </div>
      </div>
    );
  }
}

export default RecipesView;