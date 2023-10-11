const i18n = require("./index");

function t(key) {
  return i18n.t(key);
}

function changeLanguage(language) {
  return i18n.changeLanguage(language);
}

module.exports = { t, changeLanguage };
