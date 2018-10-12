import React from "react";
import { reduxForm, Field, reset } from "redux-form";

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
    this.props.dispatch(reset("quick-add"));
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
          Add a {this.props.type}...
        </div>
      );
    }

    return (
      <div className="quickaddformbuttondiv">
        <form onSubmit={this.onSubmit}>
          <label htmlFor={this.props.type} />
          <Field name={this.props.type} component="input" />
          <button className="quickaddbutt" type="submit">
            Add
          </button>
          <button
            className="quickaddbutt"
            type="button"
            onClick={() => this.setEditing(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "quick-add"
})(QuickAddForm);
