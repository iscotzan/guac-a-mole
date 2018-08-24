// @flow
import React from "react";
import { withLocalize } from "react-localize-redux";
// import aboutTranslations from "./translations/about.json";
import aboutTranslations from "./translations/about.translations";
import { Translate } from "react-localize-redux";
import { Container } from "semantic-ui-react";
import "./aboutStyle.css";
type Props = { addTranslation: Function };

class About extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.addTranslation(aboutTranslations);
  }
  render() {
    return (
      <div className="aboutWrapper">
        <Container fluid className={"darkLayer"}>
          <p className="App-intro">
            <Translate id="translations.title">
              This is an About page.
            </Translate>
          </p>
          <h1>Ingredients</h1>
          <ul>
            <li>1/2 small yellow or 1/4 red onion</li>
            <li>minced 2 cloves garlic</li>
            <li>2 tsp salt</li>
            <li>3 ripe avocados</li>
            <li>1 lime, juiced</li>
            <li>1 to 2 tsp roughly chopped fresh coriander</li>
            <li>1 ripe plum tomato,</li>
            <li>
              cored and diced 1/2 to 1 jalapeno (with seeds), finely chopped
            </li>

            {/* <Translate id="translations.aboutText" /> */}
          </ul>
          <div>
            <h1>Method</h1>
            <ol>
              <li>
                {" "}
                Soak the onion in cold water for 15 mins. Drain and transfer to
                a large bowl.
              </li>
              <li>
                {" "}
                On a cutting board, lightly sprinkle the garlic with a pinch of
                salt and smash it into a paste with the side of a cook's knife.
                Transfer the paste to the bowl with the onion.{" "}
              </li>
              <li>
                {" "}
                Using a knife cut the avocados in half, rotating around the
                seeds. Remove the seeds and discard (See Cook's Note).
              </li>
              <li>
                {" "}
                Using the knife, carefully make several slashes in the avocado
                flesh. Using a spoon, scoop the avocado flesh into the bowl with
                the onion and garlic. Repeat with the remaining avocados.{" "}
              </li>
              <li>
                {" "}
                Add the coriander, tomato, and jalapeno, to taste, to the
                avocados. Using a rubber spatula or large fork, mix until just
                combined, keeping the guacamole chunky. Season with salt, to
                taste. Serve immediately.
              </li>
            </ol>
            *Cook's Note: Here's a quick and easy way to remove the seed from an
            avocado: tap the edge of a cook's knife into the seed and twist--the
            seed will pop out. Knock the knife on the edge of a counter and the
            seed will drop off.
          </div>
        </Container>
      </div>
    );
  }
}

export default withLocalize(About);
