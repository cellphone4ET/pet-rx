import React from "react";
import { shallow } from "enzyme";
import RequiresLogin from "../../requires-login";
import { Pets } from "./pets";
import { Pet } from "./pet";
import { fetchProtectedData } from "../../../actions/protected-data";

const mockFetchPetAction = {
  type: "FETCH_PET"
};
jest.mock("../../../actions/protected-data", () =>
  Object.assign({}, require.requireActual("../../../actions/protected-data"), {
    fetchProtectedData: jest.fn().mockImplementation(() => {
      return mockFetchPetAction;
    })
  })
);

describe("<Pets/>", () => {
  let seedPets = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedPets.push({
        pets: []
      });
    }
  });

  it("Renders without crashing", () => {
    const dispatch = jest.fn();
    shallow(<Pets pets={[]} dispatch={dispatch} />);
  });

  it("Dispatches fetchPet on mount", () => {
    const dispatch = jest.fn();
    shallow(<Pets pets={[]} dispatch={dispatch} />);
    expect(dispatch).toHaveBeenCalledWith(mockFetchPetAction);
  });
});
