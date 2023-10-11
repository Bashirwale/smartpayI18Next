const i18next = require("i18next");
const { initReactI18next } = require("react-i18next");
const backend = require("i18next-http-backend");
const LanguageDetector = require("i18next-browser-languagedetector");

const i18n = i18next.createInstance();

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      /*   loadPath: "/src/locales/{{lng}}/{{ns}}.json", */
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["common", "otherNamespace"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });
// Export the i18n object using module.exports
module.exports = i18n;

console.log("Load Path:", i18n.options.backend.loadPath);
