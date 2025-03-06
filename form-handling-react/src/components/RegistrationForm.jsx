import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}  // ✅ Make sure this is present
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}  // ✅ Make sure this is present
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={password}  // ✅ Make sure this is present
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
