import React from "react";
import { motion } from "framer-motion";

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

  return (
    <motion.img
      src={src}
      alt={`${value} of ${suit}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
        (e.currentTarget as HTMLImageElement).style.border = "2px solid red";
      }}
    />
  );
};

export default CardImage;
