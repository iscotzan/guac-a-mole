// @flow
import * as React from "react";
import { Route } from "react-router-dom";
// import HomepageLayout from "./homePageLayout";
//localization files
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import globalTranslations from "./translations/globalTranslations";
// Route components
import About from "../About";
import GuacamoleGame from "../Games/guacamole";
import languageCodes from "../../constants/languageCodes";
// UI Components
import Site from "../../components/Site";

type Props = { initialize: Function };

class App extends React.Component<Props> {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: languageCodes,
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
  }
  render() {
    return (
      <Site>
        <Site.Header />
        <Route exact path="/" component={GuacamoleGame} />
        <Route exact path="/about" component={About} />
      </Site>
    );
  }
}

export default withLocalize(App);
