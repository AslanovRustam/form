import girl from "../../images/girl.png";
import bg from "../../images/bg.png";
import s from "./girl.module.css";

export default function Girl() {
  return (
    <div>
      <img className={s.bg} src={bg} alt="bg" />
      {/* <img className={s.girl} src={girl} alt="AI girl" /> */}
    </div>
  );
}
