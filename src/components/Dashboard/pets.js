import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
// import QuickAddForm from "../QuickAddForm";

export class Pets extends React.Component {
  render() {
    console.log(this.props, "props");
    const renderedPets = this.props.pets.map((pet, index) => {
      return (
        <li key={index}>
          <Pet {...pet} />
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
  pets: state.pets.pets
});

export default connect(mapStateToProps)(Pets);
