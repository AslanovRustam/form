import s from "./button.module.css";
import arrow from "../../images/arrow.png";

export default function Button({
  click,
  step,
  formData,
  onSubmit,
  wrongInput,
}) {
  const checkSubmit =
    formData.agreement && formData.email && formData.password && !wrongInput;
  return (
    <>
      {step < 4 ? (
        <div className={`${s.container} ${formData.adult ? s.adult : ""}`}>
          <div
            className={`${s.btn} ${formData.adult ? s.adultText : ""}`}
            onClick={click}
          >
            {step === 1 ? (
              "18+"
            ) : (
              <img className={s.arrow} src={arrow} alt="arrow" />
            )}
          </div>
        </div>
      ) : (
        <div className={`${s.container} ${checkSubmit ? s.adult : ""}`}>
          <div
            className={`${s.btn} ${checkSubmit ? s.adultText : ""}`}
            onClick={onSubmit}
          >
            <div className={`${s.check} ${checkSubmit ? s.checkText : ""}`}>
              &#10004;
            </div>
          </div>
        </div>
      )}
    </>
  );
}
