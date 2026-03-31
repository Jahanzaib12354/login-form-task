import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { styles } from "./styles";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
   

    if (savedEmail) setEmail(savedEmail);
  
  }, []);

  const handleLogin = () => {
    alert("Login Successful ");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <TextInput
        type="email"
        value={email}
        placeholder="Email"
         onChange={(e) => setEmail(e.target.value)}
       
      />

      <TextInput
        type="password"
        value={password}
        placeholder="Password"
         onChange={(e) => setPassword(e.target.value)}
        
      />

      <Button
        text="Login"
        onClick={handleLogin}
      />
    </div>
  );
};

export default Login;