import s from "./datePicker.module.css";

export default function DatePicker({ formData, dateInput, t }) {
  const days = Array.from({ length: 31 }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, index) =>
    String(index + 1).padStart(2, "0")
  );
  const years = Array.from({ length: 70 }, (_, index) => String(2023 - index));

  return (
    <div className={s.form}>
      <label className={s.label}>
        <span>{t("form.step_1.day")}</span>
        <select
          className={s.input}
          name="day"
          value={formData.age.day}
          onChange={dateInput}
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </label>
      <label className={s.label}>
        <span>{t("form.step_1.month")}</span>
        <select
          className={s.input}
          name="month"
          value={formData.age.month}
          onChange={dateInput}
        >
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </label>
      <label className={s.label}>
        <span>{t("form.step_1.year")}</span>
        <select
          value={formData.age.year}
          className={s.input}
          name="year"
          onChange={dateInput}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
