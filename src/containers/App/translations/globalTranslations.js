//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
import transformFunction from "../../../common/TransformTranslationFormat";
const customTranslation = {
  gb: {
    guacamoleGame: "Guacamole",
    about: "About"
  },
  es: {
    guacamoleGame: "Guacamol",
    about: "Sobre"
  },
  fr: {
    guacamoleGame: "guacamole",
    about: "Sur"
  },
  ru: {
    guacamoleGame: "Гуакамоле",
    about: "странице"
  },
  he: {
    guacamoleGame: "גוואקמולי",
    about: "אודות"
  }
};

const translation = transformFunction(customTranslation);
export default translation;
