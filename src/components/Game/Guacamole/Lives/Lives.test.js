import React from "react";
import Lives from "./Lives";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Lives visualRepresentation={'*'} lives={3} />);
describe("<Lives />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
