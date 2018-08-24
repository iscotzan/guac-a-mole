import React from "react";
import SplashButton from "./SplashButton";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<SplashButton buttonText={'buttonText'} onClick={() => {}} />);
describe("<SplashButton />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
