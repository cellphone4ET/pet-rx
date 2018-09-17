import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import QuickAddform from "../QuickAddForm";
import { addVaccine, addCheckup } from "../../actions";

export class Pets extends React.Component {
  addVaccine(vaccine) {
    this.props.dispatch(addVaccine(vaccine, this.props.index));
  }

  addCheckup(checkup) {
    this.props.dispatch(addCheckup(checkup, this.props.index));
  }

  render() {
    const renderedPets = this.props.pets.pets.map((pet, index) => (
      <li key={index}>
        <Pet index={index} {...pet} />
        <QuickAddform
          type="checkup"
          onAdd={checkup => this.addCheckup(checkup)}
        />
        <QuickAddform
          type="vaccine"
          onAdd={vaccine => this.addVaccine(vaccine)}
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
  pets: state.pets
});

export default connect(mapStateToProps)(Pets);
