import { createStore } from 'redux';
import { getID } from './lib/utils';

const reducer = (state, action) => {
  console.log(`ACTION: ${ action.type }`);

  switch (action.type) {
    case 'ADD_RECIPE':

      const newRecipe = {
        id: getID(),
        title: action.title,
        favorite: false
      };

      return { recipes: state.recipes.concat(newRecipe) };

    default:
      return state;
  }
};

const initialState = {
  recipes: [
    { id: getID(), title: 'Waffles', favorite: true },
    { id: getID(), title: 'Omelette', favorite: false },
    { id: getID(), title: 'Pancake', favorite: false }
  ]
};

const store = createStore(reducer, initialState);

window.store = store;

export default store;