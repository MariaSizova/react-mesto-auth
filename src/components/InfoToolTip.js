import Popup from "../components/Popup.js";
import success from "../images/InfoTooltip-success.svg";
import fail from "../images/InfoTooltip-fail.svg.svg";
import closebtn from "../images/close_icon.svg";

function InfoTooltip({ isOpen, onClose, name, isSuccess }) {
  const headerText = isSuccess
    ? "Вы успешно зарегистрировались"
    : "Что-то пошло не так! Попробуйте ещё раз";
  const imageSrc = isSuccess ? success : fail;

  return (
    <Popup name={name} isOpen={isOpen} onClose={onClose}>
      <div className="popup__container popup__container-register">
        <button className="popup__close-btn" type="button" onClick={onClose}>
          <img className="popup__img-close-btn" src={closebtn} alt="Крестик" />
        </button>
        <img
          className="popup__register-image"
          src={imageSrc}
          alt={headerText}
        />
        <h3 className="popup__register-title">{headerText}</h3>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
