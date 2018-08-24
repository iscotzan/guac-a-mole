//this is an option to rearrange translations in a clearer way, will need to pass through the
//TransformTranslationFormat function to conform to the default format
import transformFunction from "./../../../../../common/TransformTranslationFormat";
const customTranslation = {
  en: {
    startGameText: "Crush Them Avocados!"
  },
  es: {
    startGameText: "Aplastar Los Aguacates!"
  },
  fr: {
    startGameText:
      "écraser les avocats!"
  },
  ru: {
    startGameText:
      "раздавить адвокатов!"
  },
  he: {
    startGameText:
      "!מחץ את האבוקדו"
  }
};

const translation = transformFunction(customTranslation);
export default translation;
