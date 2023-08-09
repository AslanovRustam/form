import box1 from "../../images/box1.png";
import box2 from "../../images/box2.png";
import box3 from "../../images/box3.png";
import s from "./form.module.css";

export default function Form({ step, formData, onSelectBox, setFormData }) {
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
                <input
                  className={s.input}
                  type="number"
                  value={formData.age.day}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      age: { ...formData.age, day: e.target.value },
                    });
                  }}
                  placeholder="01"
                />
              </label>
              <label className={s.label}>
                <span>Месяц</span>
                <input
                  className={s.input}
                  type="number"
                  value={formData.age.month}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      age: { ...formData.age, month: e.target.value },
                    });
                  }}
                  placeholder="11"
                />
              </label>
              <label className={s.label}>
                <span>Год</span>
                <input
                  className={s.input}
                  type="number"
                  value={formData.age.year}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      age: { ...formData.age, year: e.target.value },
                    });
                  }}
                  placeholder="1990"
                />
              </label>
            </form>
          </>
        );
      case 2:
        return (
          <>
            <p className={s.textStart}>
              Теперь выберите<br></br> один из сикрет-боксов:
            </p>

            <form className={s.form}>
              <label className={s.labelCheckbox}>
                <div
                  className={`${s.imageContainer} ${
                    formData.box === "box1" && s.coloredBorder
                  }`}
                >
                  <div className={s.imageBox}>
                    <img className={s.image} src={box1} alt="choice 1" />
                  </div>
                </div>
                <input
                  className={s.checkBox}
                  value="box1"
                  checked={formData.box === "box1"}
                  onChange={onSelectBox}
                  type="radio"
                />
              </label>
              <label className={s.labelCheckbox}>
                <div
                  className={`${s.imageContainer} ${
                    formData.box === "box2" && s.coloredBorder
                  }`}
                >
                  <div className={s.imageBox}>
                    <img className={s.image} src={box2} alt="choice 1" />
                  </div>
                </div>
                <input
                  className={s.checkBox}
                  value="box2"
                  checked={formData.box === "box2"}
                  onChange={onSelectBox}
                  type="radio"
                />
              </label>
              <label className={s.labelCheckbox}>
                <div
                  className={`${s.imageContainer} ${
                    formData.box === "box3" && s.coloredBorder
                  }`}
                >
                  <div className={s.imageBox}>
                    <img className={s.image} src={box3} alt="choice 1" />
                  </div>
                </div>
                <input
                  className={s.checkBox}
                  value="box3"
                  checked={formData.box === "box3"}
                  onChange={onSelectBox}
                  type="radio"
                />
              </label>
            </form>
          </>
        );

      default:
        return null;
    }
  };
  return <div className={s.container}>{renderForm()}</div>;
}
