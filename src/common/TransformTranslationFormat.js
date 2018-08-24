const transformFunction = (translationData: Object) => {
  let formattedTranslation = { translations: {} };

  for (const lan_code in translationData) {
    for (const term in translationData[lan_code]) {
      if (formattedTranslation["translations"][term] === undefined) {
        formattedTranslation["translations"][term] = [];
      }
      formattedTranslation["translations"][term].push(
        translationData[lan_code][term]
      );
    }
  }

  return formattedTranslation;
};

export default transformFunction;
