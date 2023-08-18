import { useState, useEffect } from "react";
import Text from "../Text/Text";
import Form from "../Form/Form";
import Button from "../Button/Button";
import s from "./main.module.css";

export default function Main({ step, setStep, Trans, t }) {
  const [formData, setFormData] = useState({
    age: { day: "", month: "", year: "" },
    box: "box2",
    email: "",
    password: "",
    adult: false,
    agreement: false,
  });
  const [wrongInput, setWrongInput] = useState("");

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
    const now = new Date(); //current date
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //current date w/o time
    const dob = new Date(Number(year), Number(month), Number(day)); //date of birthd
    const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //BD in current year
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

  const onLogin = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateEmail(formData.email);
  };

  const onNextStep = () => {
    if (formData.adult) {
      setStep(step + 1);
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(value)) {
      setWrongInput("wrong email");
      return;
    }
    setWrongInput("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const checkSubmit =
      formData.agreement && formData.email && formData.password && !wrongInput;
    if (!checkSubmit) {
      return;
    }
    setStep(5);
    console.log("formData", formData);
  };

  return (
    <div className={s.main}>
      <Text text={text()} />
      <Form
        step={step}
        formData={formData}
        onSelectBox={onSelectBox}
        setFormData={setFormData}
        dateInput={dateInput}
        onLogin={onLogin}
        wrongInput={wrongInput}
        Trans={Trans}
        t={t}
      />
      <Button
        step={step}
        formData={formData}
        click={onNextStep}
        onSubmit={onSubmit}
        wrongInput={wrongInput}
      />
    </div>
  );
}
