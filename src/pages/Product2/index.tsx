
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const Product2: React.FC = () => {
  const { user } = useContext(UserContext);
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
       <h2>User Email:{user.name}</h2>
      <h1>Product 2 Page</h1>
      <p>This is Product 2 page content</p>
     
    </div>
  );
};

export default Product2;