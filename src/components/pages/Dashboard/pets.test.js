import React from "react";
import { shallow } from "enzyme";
import { connect } from "react-redux";

import RequiresLogin from "../../requires-login";
import { Pets } from "./pets";
import { Pet } from "./pet";

import { fetchProtectedData } from "../../../actions/protected-data";

const mockFetchPetsAction = () => (dispatch, getState) => {};

jest.mock("../../../actions/protected-data", () =>
  Object.assign({}, require.requireActual("../../../actions/protected-data"), {
    fetchPets: jest.fn().mockImplementation(() => {
      return mockFetchPetsAction;
    })
  })
);

describe("<Pets />", () => {
  let seedPets = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedPets.push({
        name: "Pet Name"
      });
    }
  });

  it("Renders without crashing", () => {
    const dispatch = jest.fn();
    shallow(<Pets name="Happy" dispatch={dispatch} />);
  });

  // it("Dispatches mockFetchPetsAction on mount", () => {
  //   const dispatch = jest.fn();
  //   shallow(<Pets pets={seedPets} dispatch={dispatch} />);
  //   expect(dispatch).toHaveBeenCalledWith(mockFetchPetsAction);
  // });
});
