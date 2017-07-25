import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Counter = (props) => (
  <span>{ props.total }</span>
);

Counter.propTypes = {
  total: PropTypes.number.isRequired
};


// Old code ^^^^^^^^^

const mapStateToProps = (state) => ({
  total: state.recipes.length
});

export default connect(mapStateToProps)(Counter);