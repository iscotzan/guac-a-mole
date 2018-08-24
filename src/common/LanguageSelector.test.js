import React from "react";
import LanguageSelector from "./LanguageSelector";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<LanguageSelector />);
describe("<LanguageSelector />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
