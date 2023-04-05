import { useContext } from "react";
import Card from "../components/Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import pencil from "../images/vector_edit-button.svg";
import plus from "../images/vector_add-button.svg";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  const cardsElements = cards.map((card) => {
    return (
      <li className="element" key={card._id}>
        <Card
          card={card}
          key={card._id}
          link={card.link}
          name={card.name}
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
        />
      </li>
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__description">
          <button className="profile__avatar-button" type="button">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватар пользователя"
              onClick={onEditAvatar}
            />
          </button>
          <div className="profile__info">
            <div className="profile__username">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              >
                <img
                  className="profile__vector-pencil"
                  src={pencil}
                  alt="Знак с ручкой"
                />
              </button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img
            className="profile__vector-plus"
            src={plus}
            alt="Знак с плюсом"
          />
        </button>
      </section>
      <section className="elements">
        <ul className="cards">{cardsElements}</ul>
      </section>
    </main>
  );
}

export default Main;
