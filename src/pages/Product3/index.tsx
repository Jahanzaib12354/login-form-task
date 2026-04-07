
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Product3: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
    <h2>User Email:{user.name}</h2>
      <h1>Product 3 Page</h1>
      <p>This is Product 3 page content</p>
    </div>
  );
};

export default Product3;