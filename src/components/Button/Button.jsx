import s from "./button.module.css";
import arrow from "../../images/arrow.png";

export default function Button({ click, step }) {
  return (
    <div className={s.container}>
      <div className={s.btn} onClick={click}>
        {step === 1 ? (
          "18+"
        ) : (
          <img className={s.arrow} src={arrow} alt="arrow" />
        )}
      </div>
    </div>
  );
}
