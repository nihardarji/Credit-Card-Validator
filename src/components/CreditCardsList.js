import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { maskcardNumber } from "../utils/maskCardNumber";
import CreditCardForm from "./CreditCardForm";

const CreditCardsList = () => {
  const [cards, setCards] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const onClickHandler = () => setShowForm(true);
  const [lastCardAdded, setLastCardAdded] = useState("");

  return (
    <>
      {cards.map((card, ind) => (
        <div
          key={ind}
          className="m-2 border"
          style={
            lastCardAdded === card.cardNumber ? { backgroundColor: "blue" } : {}
          }
        >
          <div>Cardholder Name: {card.cardName}</div>
          <div>Card Ending: {maskcardNumber(card.cardNumber)}</div>
          <div>Expiration Date: {card.cardExpiration}</div>
        </div>
      ))}
      <Button className="my-2" onClick={onClickHandler}>
        Add New Card
      </Button>

      {showForm && (
        <CreditCardForm
          cards={cards}
          setCards={setCards}
          setShowForm={setShowForm}
          setLastCardAdded={setLastCardAdded}
        />
      )}
    </>
  );
};

export default CreditCardsList;
