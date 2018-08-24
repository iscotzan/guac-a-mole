import React from "react";
import GuacamoleGame from "./GuacamoleGame";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<GuacamoleGame />);
describe("<GuacamoleGame />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
