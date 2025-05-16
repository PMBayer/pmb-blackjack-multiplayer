import React from "react";

type CardProps = {
  suit: string;
  value: string;
};

const CardImage: React.FC<CardProps> = ({ value, suit }) => {
  const fileName = "${value}_of_${suit}.png";
  const src = `/assets/cards/${fileName}`;

  return (
    <img
      src={src}
      alt={"${value} of ${suit}"}
      style={{ width: "80px", height: "120px" }}
    />
  );
};

export default CardImage;
