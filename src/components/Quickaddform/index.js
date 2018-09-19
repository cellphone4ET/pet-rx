import React from "react";
import { reduxForm, Field } from "redux-form";

import "./index.css";

export class QuickAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd();
    this.setEditing(false);
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
        <label htmlFor={this.props.type}>{this.props.type}</label>
        <Field
          name={this.props.type}
          ref={input => (this.textInput = input)}
          component="input"
        />
        <Field name="id" ref={this.props.petId} component="input" hidden />
        <button type="submit">Add</button>
        <button type="button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "quick-add"
})(QuickAddForm);
