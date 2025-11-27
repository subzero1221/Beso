import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/styles/LanguageSwitcher.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    // Sync with i18n language changes from other components
    const handleLanguageChanged = (lng: string) => {
      setCurrentLang(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "ka", label: "KA" },
  ];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`language-switcher__button ${
            currentLang === lang.code ? "language-switcher__button--active" : ""
          }`}
          aria-label={`Switch to ${lang.label} language`}
          aria-pressed={currentLang === lang.code}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
