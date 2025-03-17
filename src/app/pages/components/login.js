"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
