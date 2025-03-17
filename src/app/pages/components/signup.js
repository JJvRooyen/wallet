"use client";

import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
