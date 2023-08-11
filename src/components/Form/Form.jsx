import box1 from "../../images/box1.png";
import box2 from "../../images/box2.png";
import box3 from "../../images/box3.png";
import { ReactComponent as Mail } from "../../images/mail.svg";
import { ReactComponent as Pass } from "../../images/pass.svg";
import { ReactComponent as Eye } from "../../images/eye.svg";
import { data } from "../../data";
import s from "./form.module.css";
import { useState } from "react";

export default function Form({
  step,
  formData,
  onSelectBox,
  setFormData,
  dateInput,
  onLogin,
  wrongInput,
}) {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

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
                  name="day"
                  value={formData.age.day}
                  onChange={dateInput}
                  placeholder="01"
                />
              </label>
              <label className={s.label}>
                <span>Месяц</span>
                <input
                  className={s.input}
                  type="number"
                  name="month"
                  value={formData.age.month}
                  onChange={dateInput}
                  placeholder="11"
                />
              </label>
              <label className={s.label}>
                <span>Год</span>
                <input
                  className={s.input}
                  type="number"
                  name="year"
                  value={formData.age.year}
                  onChange={dateInput}
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
      case 3:
        return (
          <>
            <p className={s.textStart}>Вам начислено:</p>
            <ul className={s.list}>
              {data.map(({ id, image, title, description }) => (
                <li className={s.item} key={id}>
                  <p className={s.number}>{id}</p>
                  <img className={s.icon} src={image} alt="bonus1" />
                  <div>
                    <p className={s.infoTitle}>{title}</p>
                    <p className={s.infoDescription}>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className={s.text}>Следуйте далее, что бы забрать бонусы</p>
          </>
        );
      case 4:
        return (
          <>
            <p className={s.textStartSignUp}>
              я создам для вас аккаунт, на который будут начислены
              сгенерированные бонусы
            </p>

            <form className={s.formSignUp}>
              <label className={s.labelSignUp}>
                <span>Email</span>
                <Mail className={s.inputIcon} />
                <input
                  className={s.inputSignUp}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onLogin}
                  placeholder="adamweiss@gmail.com"
                  required
                />
                {wrongInput && <p className={s.wrongInput}>{wrongInput}</p>}
              </label>
              <label className={s.labelSignUp}>
                <span>Password</span>
                <Pass className={s.inputIcon} />
                <input
                  className={s.inputSignUp}
                  type={passwordType}
                  name="password"
                  minLength="3"
                  value={formData.password}
                  onChange={onLogin}
                  placeholder="************"
                  required
                />
                <Eye className={s.showIcon} onClick={togglePassword} />
              </label>
              <label className={s.labelCheckboxAgr}>
                <input
                  className={s.checkBox}
                  name="agreement"
                  checked={formData.agreement}
                  value={formData.agreement}
                  onChange={() => {
                    setFormData({
                      ...formData,
                      agreement: !formData.agreement,
                    });
                  }}
                  type="checkbox"
                />
                <p className={s.textAgr}>
                  By ticking this box to register for this website, the user
                  declares to be over 18 years old and to have read, understood
                  and accepted the Terms and Conditions.
                </p>
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