

import { useState } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { styles } from './styles'

function RegisterPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (!name || !password || !confirmPassword) {
      alert("Please fill all fields!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert(`Registration Successful!
Name: ${name}`);
    setName("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div
      style={styles.container}
    >
      <h2 style={{ color: "#070000", marginBottom: 30 }}>Register</h2>

      <TextInput
        type="text"
        value={name}
        //placeholder="Name"
        onChange={(e) => setName(e.target.value)}

      //style={styles.input}

      />

      <TextInput
        type="password"
        value={password}
        placeholder="Password"

        onChange={(e) => setPassword(e.target.value)}
        //style={styles.input}
      />

      <TextInput
        type="password"
        value={confirmPassword}
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      // style={styles.input}
      />

      <Button
        text="Submit"
        onClick={handleSubmit}
        // style={styles.btn}

      />
    </div>
  );
}

export default RegisterPage;