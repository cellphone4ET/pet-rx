import React from "react";
// import { reduxForm, Field, reset } from "redux-form";
import { connect } from "react-redux";
import NavbarDash from "../Navbar/navbar-dash";
// import Footer from "../Footer";
// import { editPet } from "../../actions";
import "./index.css";

export class Editpetform extends React.Component {
  render() {
    console.log("props are", this.props);
    console.log("currentPet is", this.props.currentPet);
    return (
      <div>
        <NavbarDash />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  editForm: "edit-pet",
  pets: state.pets.pets,
  currentPet: state.pets.currentPet
});

export default connect(mapStateToProps)(Editpetform);
