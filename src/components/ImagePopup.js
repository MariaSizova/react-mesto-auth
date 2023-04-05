import Popup from "../components/Popup.js";
import closebtn from "../images/close_icon.svg";

function ImagePopup({ card, onClose, name }) {
  const isOpen = Object.keys(card).length !== 0;

  return (
    <section
      className={`popup popup_type_image ${
        Object.keys(card).length !== 0 ? "popup_is-opened" : ""
      }`}
    >
      <Popup name={name} isOpen={isOpen} onClose={onClose}>
        <div className="popup__container popup__container_image">
          <img className="popup__image" src={card.link} alt={card.name} />
          <h2 className="popup__image-title">{card.name}</h2>
          <button className="popup__close-btn" type="button" onClick={onClose}>
            <img
              className="popup__img-close-btn"
              src={closebtn}
              alt="Крестик"
            />
          </button>
        </div>
      </Popup>
    </section>
  );
}

export default ImagePopup;
