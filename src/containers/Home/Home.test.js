import React from "react";
import Home from "./index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(
  <Home />
);
describe("<Home />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
