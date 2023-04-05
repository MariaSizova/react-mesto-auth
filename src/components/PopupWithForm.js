import closebtn from "../images/close_icon.svg";

function PopupWithForm({
  title,
  name,
  children,
  onClose,
  onSubmit,
  submitButtonText,
  isLoading,
  isValid,
}) {
  const submitButtonDisable = (isLoading || isValid) && true;

  const submitButtonClassName = `popup__save-btn ${
    isValid && "popup__button_invalid"
  }`;

  return (
    <div className="popup__container">
      <h2 className="popup__title">{title}</h2>
      <form
        className="popup__form"
        name={`${name}`}
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <button
          className={submitButtonClassName}
          type="submit"
          disabled={submitButtonDisable}
        >
          {submitButtonText}
        </button>
      </form>
      <button className="popup__close-btn" type="button" onClick={onClose}>
        <img className="popup__img-close-btn" src={closebtn} alt="Крестик" />
      </button>
    </div>
  );
}

export default PopupWithForm;
