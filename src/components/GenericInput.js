import React from 'react';

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

export default GenericInput;