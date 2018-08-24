import React from "react";
import About from "./index";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(
  <About />
);
describe("<About />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
