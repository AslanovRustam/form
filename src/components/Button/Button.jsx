import s from "./button.module.css";
import arrow from "../../images/arrow.png";

export default function Button({ click, step, adult }) {
  return (
    <div className={`${s.container} ${adult ? s.adult : ""}`}>
      <div className={`${s.btn} ${adult ? s.adultText : ""}`} onClick={click}>
        {step === 1 ? (
          "18+"
        ) : (
          <img className={s.arrow} src={arrow} alt="arrow" />
        )}
      </div>
    </div>
  );
}
