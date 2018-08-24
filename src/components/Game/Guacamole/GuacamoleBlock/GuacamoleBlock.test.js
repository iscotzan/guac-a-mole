import React from "react";
import GuacamoleBlock from "./GuacamoleBlock";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const pawns = {
  0: {
    role: "avocado",
    active: false,
    targetHit: false,
    lifetime: 0,
    style: "translate(0, -110%)"
  }
};

const wrapper = shallow(
  <GuacamoleBlock
    context={pawns[0]}
    onClick={() => {}}
    bowlNumber={0}
    currentClass={"avocado"}
    disabled={pawns[0].targetHit}
  />
);
describe("<GuacamoleBlock />", () => {
  it("should be defined", () => {
    expect(wrapper).toBeDefined();
  });

  it("renders without crashing", () => {
      expect(toJson(wrapper)).toMatchSnapshot();
  });
});
