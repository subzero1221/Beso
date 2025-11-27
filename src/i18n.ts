import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "././assets/text/en.json";
import ru from "././assets/text/ru.json";
import ka from "././assets/text/ka.json";

const resources = {
  en: { translation: en },
  ru: { translation: ru },
  ka: { translation: ka },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
