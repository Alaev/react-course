import { createStore } from 'redux';
import { getID } from './lib/utils';
import reducer from './reducers/root';

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