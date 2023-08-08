import s from "./container.module.css";

export default function Container({ children }) {
  return (
    <section className={s.section}>
      <div className={s.backDrop}>{children}</div>
    </section>
  );
}
