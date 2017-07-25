import { getID } from '../lib/utils';

const reducer = (state, action) => {
  console.log(`ACTION: ${ action.type }`);

  switch (action.type) {
    case 'ADD_RECIPE':

      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      return Object.assign({}, state, { recipes: state.recipes.concat(newRecipe) });

    case 'TOGGLE_RECIPE':
      return Object.assign({}, state, {
        recipes: state.recipes.map(recipe => recipe.id !== action.id
          ? recipe
          : Object.assign({}, recipe, { favorite: !recipe.favorite }))
      });

    default:
      return state;
  }
};

export default reducer;