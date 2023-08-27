import "./EntryForm.css";
import Button from "../Button/Button";

export default function EntryForm() {
  return (
    <form className="form">
      <h2 className="form__title">New Entry</h2>
      <label className="form__input">
        Motto
        <textarea name="motto" className="form__input__field"></textarea>
      </label>
      <label className="form__input">
        Notes
        <textarea
          name="notes"
          rows="5"
          cols="33"
          className="form__input__field"
        ></textarea>
      </label>
      <Button type="submit">Create</Button>
    </form>
  );
}
