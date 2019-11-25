import React from "react";

import { useFormInput } from "../../../hooks/useFormInput";
import Input from "../../../shared/WLInput";

const LoginForm = () => {
  const passwordInput = useFormInput();
  const emailInput = useFormInput("mail");

  const UserLogin = () => {
    console.log(`login: ${emailInput.value} hasło: ${passwordInput.value}`);
  };

  return (
    <form>
      E-mail:{" "}
      <Input
        name="email"
        input={emailInput}
        // value={emailInput.value}
        // onChange={emailInput.onChange}
      />
      Hasło: <Input name="password" type="password" input={passwordInput} />
      <button onClick={UserLogin}>Zaloguj</button>
    </form>
  );
};
export default LoginForm;
