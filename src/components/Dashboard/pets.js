import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import QuickAddform from "../QuickAddForm";
import { addVaccine, addCheckup } from "../../actions";

export class Pets extends React.Component {
  addVaccine() {
    console.log("add vaccine", this.props);
    const text = this.props.reduxform.values.vaccine;
    const id = this.props.dispatch(addVaccine(text, id));
  }

  addCheckup(text) {
    this.props.dispatch(addCheckup(text, this.props.index));
  }

  render() {
    const renderedPets = this.props.pets.pets.map((pet, index) => (
      <li key={pet.id}>
        <Pet index={pet.id} {...pet} />
        <QuickAddform
          ref={pet.id}
          type="checkup"
          onAdd={() => this.addCheckup()}
        />
        <QuickAddform
          petId={pet.id}
          type="vaccine"
          onAdd={() => this.addVaccine()}
        />
      </li>
    ));

    return (
      <div>
        <ul>{renderedPets}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pets: state.pets,
  reduxform: state.form["quick-add"]
});

export default connect(mapStateToProps)(Pets);
