import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});  // ✅ Track validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {}; // Object to store validation errors

    if (!username) newErrors.username = "Username is required";  // ✅ if (!username)
    if (!email) newErrors.email = "Email is required";           // ✅ if (!email)
    if (!password) newErrors.password = "Password is required";  // ✅ if (!password)

    setErrors(newErrors);  // ✅ Update error state

    if (Object.keys(newErrors).length === 0) {
      console.log({ username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
