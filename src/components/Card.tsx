
import React from "react";

type CardProps = {
  backgroundColor?: string;
  textStyle?: React.CSSProperties;
  image?: string;
  title: string;
};

const Card: React.FC<CardProps> = ({
  backgroundColor = "#fff",
  textStyle,
  image,
  title,
}) => {
  return (
    <div style={{ ...cardStyle, backgroundColor }}>
      {image && <img src={image} alt="card" style={imageStyle} />}
      <h3 style={{ ...titleStyle, ...textStyle }}>{title}</h3>
    </div>
  );
};

export default Card;

/* Styles */
const cardStyle: React.CSSProperties = {
  padding: "20px",
  borderRadius: "12px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imageStyle: React.CSSProperties = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "bold",
};

