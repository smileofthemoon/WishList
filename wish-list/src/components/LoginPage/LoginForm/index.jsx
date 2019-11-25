import React, { useState } from "react";

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState("mail");
  const [userPassword, setUserPassword] = useState();

  const UserLogin = () => {
    console.log(`login: ${userEmail} hasło: ${userPassword}`);
  };

  return (
    <form>
      E-mail:{" "}
      <input
        name="email"
        value={userEmail}
        onChange={event => setUserEmail(event.target.value)}
      />
      Hasło:{" "}
      <input
        name="password"
        type="password"
        value={userPassword}
        onChange={event => setUserPassword(event.target.value)}
      />
      <button onClick={UserLogin}>Zaloguj</button>
    </form>
  );
};
export default LoginForm;
