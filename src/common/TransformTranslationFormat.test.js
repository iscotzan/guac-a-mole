import TransformTranslationFormat from "./TransformTranslationFormat";

describe("TransformTranslationFormat", () => {
  it("should be defined", () => {
    expect(TransformTranslationFormat).toBeDefined();
  });

  it("returns a formatted translation", () => {
    const demoCustomTranslation = {
      languageCode: {
        fieldName: "Field Value",
        otherFieldName: "Other Field Value"
      },
      otherLanguageCode: {
        fieldName: "ערך שדה ",
        otherFieldName: "ערך שדה אחר"
      }
    };
    const expectedFormat = {
      translations: {
        fieldName: ["Field Value", "ערך שדה "],
        otherFieldName: ["Other Field Value", "ערך שדה אחר"]
      }
    };
    expect(TransformTranslationFormat(demoCustomTranslation)).toEqual(
      expectedFormat
    );
    //   expect(toJson(wrapper)).toMatchSnapshot();
  });
});
