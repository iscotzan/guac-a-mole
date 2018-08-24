import React from "react";
import StartScreen from "./StartScreen";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(
  <StartScreen />
);
describe("<StartScreen />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
