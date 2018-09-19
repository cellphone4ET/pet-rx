import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import QuickAddform from "../QuickAddForm";
import { addVaccine, addCheckup } from "../../actions";

export class Pets extends React.Component {
  addVaccine(id) {
    const text = this.props.reduxform.values.vaccine;
    this.props.dispatch(addVaccine(text, id));
  }

  addCheckup(id) {
    console.log("add checkup");
    const text = this.props.reduxform.values.checkup;
    this.props.dispatch(addCheckup(text, id));
  }

  render() {
    console.log(this.props, "props");
    const renderedPets = this.props.pets.pets.map((pet, index) => {
      return (
        <li key={pet.id}>
          <Pet {...pet} />
          <QuickAddform
            petId={pet.basic_information.id}
            type="checkup"
            onAdd={() => this.addCheckup(pet.basic_information.id)}
          />
          <QuickAddform
            petId={pet.basic_information.id}
            type="vaccine"
            onAdd={() => this.addVaccine(pet.basic_information.id)}
          />
        </li>
      );
    });

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
