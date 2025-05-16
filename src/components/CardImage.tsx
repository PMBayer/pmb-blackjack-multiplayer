import React from "react";

type CardProps = {
  value: string;
  suit: string;
};

const CardImage: React.FC<CardProps> = ({ value, suit }) => {
  const fileName = `${value}_of_${suit}.png`;
  const src = `/assets/cards/${fileName}`;

  return (
    <img
      src={src}
      alt={`${value} of ${suit}`}
      style={{
        width: "80px",
        height: "120px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        objectFit: "cover",
        backgroundColor: "#f0f0f0", // für transparente Karten
      }}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = "/assets/cards/back.png";
      }}
    />
  );
};

export default CardImage;
