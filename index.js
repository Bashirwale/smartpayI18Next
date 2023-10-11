const i18next = require("i18next");
const { initReactI18next } = require("react-i18next");
const backend = require("i18next-http-backend");
const LanguageDetector = require("i18next-browser-languagedetector");

/* const i18n = i18next.createInstance(); */

/* module.exports = i18n; */

(async function test() {
  const i18n = await i18next
    .use(backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      backend: {
        loadPath: "/src/locales/{{lng}}/{{ns}}.json",
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

  const translatedText = i18n.t("welcome");
  console.log("Translated Text:", translatedText);
  console.log("Load Path:", i18n.options.backend.loadPath);
  console.log("Language Changed to French");
})();
