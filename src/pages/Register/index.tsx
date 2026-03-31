

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match ");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Create Account</h2>

      <TextInput
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button
        text="Register"
        onClick={handleRegister}
      />
    </div>
  );
};

export default Register;


  
  
