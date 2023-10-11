const { t, changeLanguage } = require("./translate.js");

/* changeLanguage("en"); */
const translatedText = t("welcome");
console.log("Translated Text:", translatedText);

console.log("Language Changed to French");
