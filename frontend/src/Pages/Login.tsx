import React from "react";

type Props = {};

const Login = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} method="post">
        <input type="text" name="username" id="username" />
        <br />
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
