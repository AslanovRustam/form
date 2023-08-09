import { useState } from "react";
import Text from "../Text/Text";
import Form from "../Form/Form";
import girl from "../../images/girl.png";
import bg from "../../images/bg.png";
import cardBg from "../../images/cardBg.png";
import s from "./main.module.css";
import Button from "../Button/Button";

export default function Main() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: { day: "", month: "", year: "" },
    box: "box2",
    email: "",
    password: "",
    adult: false,
  });
  const onSelectBox = (e) => {
    setFormData({ ...formData, box: e.target.value });
  };
  console.log(formData);
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
  console.log(text());
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
      />
      <Button
        step={step}
        click={() => {
          setStep(step + 1);
        }}
      />
    </div>
  );
}
