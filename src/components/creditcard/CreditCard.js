import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationYear,
    expirationMonth,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let imgSrc = '';
  const maskedNumber = '**** **** **** ';
  const preparedCardNumber = maskedNumber + number.substr(number.length - 4);
  if (type === 'Visa') {
    imgSrc = 'img/visa.png';
  } else if (type === 'Master Card') {
    imgSrc = 'img/master-card.svg';
  }

  return (
    <div className="credit-card-container">
      <div
        className="creditCard"
        style={{ backgroundColor: bgColor, color: color }}
      >
        <img id="logo-image" src={imgSrc} alt="credit-card" />
        <h3 className="cardNumber">{preparedCardNumber}</h3>
        <p>
          {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
