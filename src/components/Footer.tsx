// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <div style={footerStyle}>
      <p>Footer</p>
    </div>
  );
};

export default Footer;

const footerStyle: React.CSSProperties = {
  backgroundColor: "#dea53a",
  color: "white",
  textAlign: "center",
  padding: "15px",
  position: "fixed", // stays at bottom of the screen
  bottom: 0,
  width: "87%",
};