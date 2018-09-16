import React from "react";

import "./index.css";

export default class QuickAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const text = this.textInput.value.trim();
    if (text && this.props.onAdd) {
      this.props.onAdd(this.textInput.value);
    }
    this.textInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div className="add-button" onClick={() => this.setEditing(true)}>
          <a href="#">Add a {this.props.type}...</a>
        </div>
      );
    }

    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" ref={input => (this.textInput = input)} />
        <button>Add</button>
        <button type="button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}
