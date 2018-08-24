import React from "react";
import ReactDOM from "react-dom";
import App from "./index.js";
import { BrowserRouter as Router } from "react-router-dom";
import { shallow } from "enzyme";
const app = shallow(
  <Router>
    <App />
  </Router>
);

describe("<App />", () => {
  it("should be defined", () => {
      expect(App).toBeDefined();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(app, div);
    expect(app).toMatchSnapshot();
  });
});
