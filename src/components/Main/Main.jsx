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
  return (
    <div className={s.main}>
      {/* <img className={s.cardBg} src={cardBg} alt="cardBg" /> */}
      <img className={s.bg} src={bg} alt="bg" />
      <img className={s.girl} src={girl} alt="AI girl" />
      <Text text="Добро пожаловать!" />
      <Form step={step} />
      <Button />
    </div>
  );
}
