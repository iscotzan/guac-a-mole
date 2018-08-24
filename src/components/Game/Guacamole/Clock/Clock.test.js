import React from "react";
import Clock from "./Clock";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Clock percentTimeLeft={100} currentCount={60} />);
describe("<Clock />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
