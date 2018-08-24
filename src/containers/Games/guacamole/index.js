import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import GuacamoleGame from "./game/GuacamoleGame";

class GuacamoleGameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <GuacamoleGame />;
  }
}

export default withLocalize(GuacamoleGameboard);
