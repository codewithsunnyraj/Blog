import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-2xl shadow-xl border border-gray-300 p-8 w-96 max-w-xl">
        <div className="">
          <h3 className="text-center text-4xl font-bold mb-2">Admin Login</h3>
          <p className="text-center py-4 text-xl">
            Enter Your credentials to ccess the admin Panel
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              required
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter Your Email"
              className="outline-none p-2 mb-5 border-b-2 border-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              placeholder="Enter Your Password"
              className="outline-none p-2 mb-5 border-b-2 border-gray-500"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-blue-500 py-3 cursor-pointer  w-full text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
