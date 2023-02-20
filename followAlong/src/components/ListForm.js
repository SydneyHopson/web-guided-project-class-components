import React, { useState } from "react";

class ListForm extends React.Component {
  // Constructor with state
constructor() {
  super();
  this.state = {
    item: ""
  } 
}
t
  handleChanges = e => {
    // update state with each keystroke here
    e.preventDefault();
    this.setState({...this.state, item: e.target.value })
  };

  // class property to submit form
  // create submitForm method here
  submitForm = e => {
    e.preventDefault();
  // add this.props to get access to the properties
  this.props.addItem(e, this.state.item);
  // then reset state 
  this.setState({...this.state, item: ""})
  }

  render() {
    return (

      // add onSubmit here on the form and point to the submitForm function in the ={}
      <form onSubmit={this.submitForm}   >
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        {/* add value to update item in state as we type into our input and add onchange handler */}
        <input type="text" name="item" value={this.state.item} onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;



