// @flow
import * as React from "react";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import { Grid, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import "./StartScreen.css";
import "./drawBorderBtn.css";
const StartScreen = props => {
 
  return (
    <Grid columns={1} centered className={"site-view"}>
      <Grid.Row centered stretched>
        <Grid.Column verticalAlign="middle" stretched>
          <Image src="./../../assets/images/pexels-photo-1166419_med.jpg" fluid>
            <Link to="/guacamole"> 
            <button className={"btn draw-border shiny-btn"}>
              <Translate
                id="translations.startGameText"
              />
            </button>
            </Link>
          </Image>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default withLocalize(StartScreen);
