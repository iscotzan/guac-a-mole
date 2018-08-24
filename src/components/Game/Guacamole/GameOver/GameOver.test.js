import React from "react";
import GameOver from "./GameOver";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<GameOver gameOver={true} score={7777} highScore={10000} />);
describe("<GameOver />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
