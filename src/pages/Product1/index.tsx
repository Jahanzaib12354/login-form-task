


import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Product1: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>User Email: {user.name}</h2>
      <h1>Product 1 Page</h1>
      <p>This is Product 1 page content</p>
      
    </div>
  );
};

export default Product1;