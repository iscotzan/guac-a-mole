import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(
  <Header />
);
describe("<Header />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
