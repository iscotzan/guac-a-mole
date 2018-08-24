import React from "react";
import GuacamoleLogo from "./GuacamoleLogo";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<GuacamoleLogo />);
describe("<GuacamoleLogo />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
