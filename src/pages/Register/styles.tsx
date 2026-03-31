import type { CSSProperties } from "react";

export const styles: {
  
  container: CSSProperties;
  title: CSSProperties;
  input:CSSProperties;
  button:CSSProperties;
  style?:CSSProperties;
} = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
  },
  title: {
    marginBottom: "20px",
  },
input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #cccccc",
    fontSize: "14px",
  },
   button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
};