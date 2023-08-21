import s from "./welldone.module.css";
import girl from "../../images/girl.png";

export default function Welldone({ Trans, t }) {
  return (
    <div className={s.container}>
      <img className={s.girl} src={girl} alt="girl AI" />
      <div className={s.box}>
        <p className={s.titleGreat}>
          <Trans i18nKey="wellDone.paragraf_1">
            Отлично!<br className={s.hide}></br> Остался последний шаг:
          </Trans>
        </p>
        <p className={s.count}>
          <Trans i18nKey="wellDone.paragraf_2">
            пополните ваш счет<br className={s.hide}></br> чтобы начать игру
          </Trans>
        </p>
        <p className={s.economy}>{t("wellDone.paragraf_3")}</p>
        <p className={s.bonus}>
          <Trans i18nKey="wellDone.paragraf_4">
            50$ депозит + <br className={s.hide}></br>50$ бонус"
          </Trans>
        </p>
        <button
          type="button"
          className={s.btn}
          onClick={() => console.log("click")}
        >
          {t("wellDone.paragraf_5")}
        </button>
      </div>
    </div>
  );
}
