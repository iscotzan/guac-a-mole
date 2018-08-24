import React from "react";
import Score from "./Score";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Score score={12345} />);
describe("<Score />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
