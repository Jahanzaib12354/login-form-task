
import type { CSSProperties } from "react";

export const styles: {
  textstyle: CSSProperties;
  navbar: CSSProperties;
  container: CSSProperties;
  cardContainer: CSSProperties;
  footer: CSSProperties;
 searchInput: CSSProperties;
 searchBox: CSSProperties;
} = {
  textstyle: {
    color: "blue",
    fontStyle: "italic",
    fontSize: "16px",
  },

  navbar: {
    backgroundColor: "#dea53a",
    padding: "15px",
    color: "white",
    textAlign: "center",
  },

  container: {
    padding: "40px",
    backgroundColor: "#1ca37846",
    minHeight: "80vh",
    textAlign: "center",
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    
  },

  footer: {
    backgroundColor: "#c1a234",
    padding: "15px",
    color: "white",
    textAlign: "center",
  },
  
   searchBox: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
  },

  searchInput: {
  width: "60%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none",
  fontSize: "16px",
},
};


