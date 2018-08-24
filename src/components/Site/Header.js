// @flow
import * as React from "react";
import { Link } from "react-router-dom";
// import LetterMorph from "react-letter-morph";
// import { Button, Icon } from "semantic-ui-react";
import { Container, Menu } from "semantic-ui-react";
import LanguageToggle from "../../common/LanguageSelector";
import { Translate } from "react-localize-redux";
// import GuacamoleLogo from "./../Game/Guacamole/GuacamoleLogo/GuacamoleLogo";
const Header = () => {
  return (
    <Menu id="mainMenu" borderless className="mainMenuContainer">
      <Container>
        <Menu.Item>
          <LanguageToggle />
        </Menu.Item>
        <Menu.Item className={"effect-underline"}>
          <Link to={"./"}>
            <Translate id="translations.guacamoleGame">Guacamole</Translate>
          </Link>
        </Menu.Item>
        <Menu.Item className={"effect-underline"}>
          <Link to={"./about"}>
            <Translate id="translations.about">About</Translate>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default Header;
