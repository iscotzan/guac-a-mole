import React, { Component } from "react";
import { withLocalize } from "react-localize-redux";
import homeTranslation from "./translations/home.translations";
import StartScreen from "../../components/Game/guacamole/StartScreen/StartScreen";
import StartScreenTranslations from "./../../components/Game/guacamole/StartScreen/translations/startScreen.translations";

class Home extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(homeTranslation);
    this.props.addTranslation(StartScreenTranslations);
    this.state = {};
  }
  render() {
    return (
      <StartScreen />
    );
  }
}

export default withLocalize(Home);