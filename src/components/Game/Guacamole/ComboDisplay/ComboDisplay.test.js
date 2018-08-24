import React from "react";
import ComboDisplay from "./ComboDisplay";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<ComboDisplay scoreMultiplier={1} comboMaxLevel={6} />);
describe("<ComboDisplay />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
