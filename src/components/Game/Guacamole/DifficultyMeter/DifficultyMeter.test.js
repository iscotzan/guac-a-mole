import React from "react";
import DifficultyMeter from "./DifficultyMeter";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<DifficultyMeter difficultyLvl={3} difficultyPercent={50} />);
describe("<DifficultyMeter />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
