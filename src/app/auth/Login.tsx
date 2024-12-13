import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://94.74.86.174:8080/api/login", {
        username: username,
        password: password,
      });

      console.log(response);

      const { data, errorMessage } = response.data;

      if (data.token) {
        localStorage.setItem("token", data.token);

        navigate("/");
      }

      console.log(errorMessage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container max-w-lg m-auto flex justify-center items-center h-dvh">
      <section className="w-1/2 shadow-md rounded-md p-4">
        <h5 className="font-semibold text-sky-500 text-2xl mb-3">Sign In</h5>

        <form>
          <div className="mb-3">
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full outline-none border-b border-b-inherit hover:border-b hover:border-b-sky-500 focus:border-b-sky-500 "
              placeholder="Username"
            />
          </div>

          <div className="mb-3">
            {/* <label htmlFor="password">Password</label> */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="w-full outline-none border-b border-b-inherit hover:border-b hover:border-b-sky-500 focus:border-b-sky-500 "
            />
          </div>

          <button
            onClick={(e) => onSubmit(e)}
            className="bg-sky-500 w-full rounded-md text-white mt-3"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}
