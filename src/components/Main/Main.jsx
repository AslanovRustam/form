import { useState, useEffect } from "react";
import Text from "../Text/Text";
import Form from "../Form/Form";
import Button from "../Button/Button";
import girl from "../../images/girl.png";
import bg from "../../images/bg.png";
// import cardBg from "../../images/cardBg.png";
import s from "./main.module.css";

export default function Main() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: { day: "", month: "", year: "" },
    box: "box2",
    email: "",
    password: "",
    adult: false,
  });

  useEffect(() => {
    checkAdult();
  }, [formData.age]);

  const onSelectBox = (e) => {
    setFormData({ ...formData, box: e.target.value });
  };

  const text = () => {
    switch (step) {
      case 1:
        return "Добро пожаловать!";
      case 2:
        return "Отлично! Продолжим.";
      case 3:
        return "Генерирую подарки...";
      case 4:
        return "Заполните форму";
      default:
        return null;
    }
  };
  const checkAdult = () => {
    const {
      age: { day, month, year },
    } = formData;
    if (day === "" || month === "" || year === "") {
      return 0;
    }
    const now = new Date(); //Текущя дата
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
    const dob = new Date(Number(year), Number(month), Number(day)); //Дата рождения
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
    let age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
      age = age - 1;
    }
    if (age > 17 && age < 70) {
      setFormData({ ...formData, adult: true });
    } else {
      setFormData({ ...formData, adult: false });
    }
  };

  const dateInput = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      age: { ...formData.age, [name]: value },
    });
  };

  const onNextStep = () => {
    if (formData.adult) {
      setStep(step + 1);
    }
  };
  return (
    <div className={s.main}>
      {/* <img className={s.cardBg} src={cardBg} alt="cardBg" /> */}
      <img className={s.bg} src={bg} alt="bg" />
      <img className={s.girl} src={girl} alt="AI girl" />
      <Text text={text()} />
      <Form
        step={step}
        formData={formData}
        onSelectBox={onSelectBox}
        setFormData={setFormData}
        dateInput={dateInput}
      />
      <Button step={step} adult={formData.adult} click={onNextStep} />
    </div>
  );
}
