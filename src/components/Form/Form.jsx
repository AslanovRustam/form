import Button from "../Button/Button";
import s from "./form.module.css";

export default function Form({ step }) {
  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <>
            <p className={s.text}>
              Я — искусственный ителлект игровой платформы WEISS.<br></br>
              <br></br>Моя задача — сгенерировать специальные бонусы для вас,
              чтобы вы получили максимально яркий игровой опыт.
            </p>
            <p className={s.textViolet}>Доступ строго 18+</p>
            <p className={s.text}>Введите дату вашего рождения:</p>
            <form className={s.form}>
              <label className={s.label}>
                <span>День</span>
                <input className={s.input} placeholder="01" />
              </label>
              <label className={s.label}>
                <span>Месяц</span>
                <input className={s.input} placeholder="11" />
              </label>
              <label className={s.label}>
                <span>Год</span>
                <input className={s.input} placeholder="1990" />
              </label>
              {/* <Button /> */}
            </form>
          </>
        );

      default:
        return null;
    }
  };
  return <div className={s.container}>{renderForm()}</div>;
}
