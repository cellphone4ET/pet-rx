import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import { fetchProtectedData } from "../../actions/protected-data";

export class Pets extends React.Component {
  componentDidMount() {
    console.log("hi");
    this.props.dispatch(fetchProtectedData);
  }

  render() {
    const renderedPets = this.props.pets.map((pet, index) => {
      return (
        <li key={index}>
          <Pet {...pet} />
        </li>
      );
    });

    return (
      <div id="main">
        <ul>{renderedPets}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pets: state.protectedData.pets
});

export default connect(mapStateToProps)(Pets);
