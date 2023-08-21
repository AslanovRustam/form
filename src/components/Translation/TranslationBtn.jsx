import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { ReactComponent as Arrow } from "../../images/arrow_drop_down.svg";
import { ReactComponent as Earth } from "../../images/earth.svg";
import s from "./translatioan.module.css";

export default function TranslationBtn() {
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();
  const lang = i18n.use(LanguageDetector).language;
  useEffect(() => {
    if (lang) {
      setLanguage(lang);
      i18n.changeLanguage(lang);
      return;
    }
    i18n.changeLanguage("en");
  }, []);
  const handleChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  console.log(lang);
  return (
    <div className={s.container}>
      <form className={s.form}>
        <Earth className={s.earthIcon} />
        <select
          className={s.select}
          name="lang"
          value={language}
          onChange={handleChange}
        >
          <option value="ua">UA</option>
          <option value="en">EN</option>
          <option value="de">DE</option>
          <option value="ru">RU</option>
        </select>
        <Arrow className={s.arrowIcon} />
      </form>
    </div>
  );
}
