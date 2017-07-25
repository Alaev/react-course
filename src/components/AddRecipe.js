import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRecipe } from '../actions/recipes';

class AddRecipe extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.title.value);

    this.title.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref={ e => this.title = e } type="text"/>
        <button>Add</button>
      </form>
    );
  }
}

AddRecipe.propTypes = {
  addRecipe: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
});

// const mapDispatchToProps = (dispatch) => ({
//   addRecipe: (title) => dispatch(buildAddRecipe(title)),
//   delRecipe: (id) => dispatch(buildDeleteRecipe(id)),
//   changeName: (id, name) => dispatch(buildChangeName(id, name))
// });

export default connect(mapStateToProps, { addRecipe })(AddRecipe);