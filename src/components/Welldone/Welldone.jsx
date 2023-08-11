import s from "./welldone.module.css";
import girl from "../../images/girl.png";

export default function Welldone() {
  return (
    <div className={s.container}>
      <img className={s.girl} src={girl} alt="girl AI" />
      <div className={s.box}>
        <p className={s.titleGreat}>
          Отлично!<br></br> Остался последний шаг:
        </p>
        <p className={s.count}>
          пополните ваш счет<br></br> чтобы начать игру
        </p>
        <p className={s.economy}>100% экономии! </p>
        <p className={s.bonus}>
          50$ депозит + <br></br>50$ бонус
        </p>
        <button
          type="button"
          className={s.btn}
          onClick={() => console.log("click")}
        >
          Пополнить счет
        </button>
      </div>
    </div>
  );
}
