import React, { useState } from "react";

import { useFormInput } from "../../../hooks/useFormInput";

const LoginForm = () => {
  const passwordInput = useFormInput();
  const emailInput = useFormInput("mail");

  const UserLogin = () => {
    console.log(`login: ${emailInput.value} hasło: ${passwordInput.value}`);
  };

  return (
    <form>
      E-mail:{" "}
      <input
        name="email"
        {...emailInput}
        // value={emailInput.value}
        // onChange={emailInput.onChange}
      />
      Hasło: <input name="password" type="password" {...passwordInput} />
      <button onClick={UserLogin}>Zaloguj</button>
    </form>
  );
};
export default LoginForm;
