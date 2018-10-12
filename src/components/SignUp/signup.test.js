import React from "react";
import { shallow } from "enzyme";

import SignUp from ".";

describe("<SignUp />", () => {
  it("Renders without crashing", () => {
    shallow(<SignUp />);
  });
});
