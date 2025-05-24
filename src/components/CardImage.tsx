import React from "react";

type CardProps = {
  value: string;
  suit: string;
};

const CardImage: React.FC<CardProps> = ({ value, suit }) => {
  // Map face values to file names
  let fileValue = value;
  if (value === "A") fileValue = "ace";
  else if (value === "K") fileValue = "king";
  else if (value === "Q") fileValue = "queen";
  else if (value === "J") fileValue = "jack";
  // All others (2-10) are already correct
  // Suit should be lowercase for file names
  const fileName = `${fileValue.toLowerCase()}_of_${suit.toLowerCase()}.png`;
  const src = `/assets/${fileName}`;

  // For debugging: log the src path
  console.log('Card image src:', src);

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
        (e.currentTarget as HTMLImageElement).src = "/assets/back.png";
        (e.currentTarget as HTMLImageElement).style.border = "2px solid red";
      }}
    />
  );
};

export default CardImage;
