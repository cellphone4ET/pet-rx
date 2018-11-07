import React from "react";
import { connect } from "react-redux";
import Pet from "./pet";
import GetStarted from "./getstarted";
import Loading from "./loading";

import { fetchProtectedData } from "../../../actions/protected-data";

export class Pets extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    if (this.props.loading === true) {
      return <Loading />;
    }

    if (this.props.pets.length === 0) {
      return <GetStarted />;
    }

    const renderedPets = this.props.pets.map((pet, index) => {
      return (
        <li key={index}>
          <Pet pet={pet} />
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
  loading: state.protectedData.loading,
  pets: state.protectedData.pets
});

export default connect(mapStateToProps)(Pets);
