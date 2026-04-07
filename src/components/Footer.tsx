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
  width: "97.5%",

  // min-height:10vh,
  // box-sizing:border-box,
  // boxSizing:"border-box"

  // marginTop: "20px", // space before footer
};