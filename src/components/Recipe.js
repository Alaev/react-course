import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Counter from './Counter';

const Recipe = ({ recipe, toggle }) => (
  <li className={ classNames({ 'favorite': recipe.favorite }) }
      onClick={ () => toggle(recipe) }>
    { recipe.title } (<Counter/>)
  </li>
);

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Recipe;