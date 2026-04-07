
// import React, { useEffect, useState, useContext } from "react";
// import Button from "../../components/Button";
// import TextInput from "../../components/TextInput";
// import { styles } from "./styles";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../context/UserContext"; 

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const { setUser } = useContext(UserContext); // context use

//   useEffect(() => {
//     const savedEmail = localStorage.getItem("email");
//     if (savedEmail) setEmail(savedEmail);
//   }, []);

//   const handleLogin = () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     // example: set user in context
//     const userData = { name: email }; // a simple user object
//     setUser(userData);

//     // optional: save email in localStorage
    

//     navigate("/home");
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.title}>Login</h2>

//       <TextInput
//         type="email"
//         value={email}
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <TextInput
//         type="password"
//         value={password}
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <Button text="Login" onClick={handleLogin} />
//     </div>
//   );
// };

// export default Login;





// ...

import React, { useEffect, useState, useContext } from "react";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

// ✅ Redux imports
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const dispatch = useDispatch(); // ✅ redux dispatch

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ user object
    const userData = {
      name: email,
      email: email,
    };

    // ✅ Context (old system)
    setUser(userData);

    // ✅ Redux (new system)
    dispatch(login(userData));

    // optional: save email
    localStorage.setItem("email", email);

    navigate("/home");
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

      <Button text="Login" onClick={handleLogin} />
    </div>
  );
};

export default Login;