import s from "./text.module.css";
import box from "../../images/aiTextBox.png";

export default function Text({ text }) {
  return (
    <div className={s.container}>
      <img className={s.image} src={box} alt="box" />
      <p className={s.text}>{text}</p>
    </div>
  );
}
