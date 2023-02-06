import { Input } from "../Ui/Input";
import React, { useContext, useState } from "react";
import Button from "../Ui/Button";
import { useNavigate } from "react-router-dom";
import { SignupContext } from "../context/signup-context";

const LoginForm = () => {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [erorMsg, setErrorMsg] = useState([]);
  const { setLoggedIn } = useContext(SignupContext);
  const navigate = useNavigate();

  const submitLoginHandler = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        email: logEmail,
        password: logPassword,
      },
    };
    const fetchLogin = async () => {
      const res = await fetch("https://api.realworld.io/api/users/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(newUser),
      });

      const data = await res.json();
      if (!res.ok) {
        const error = Object.keys(data.errors).map((errs) => {
          return `${errs} ${data.errors[errs].join(",")}`;
        });
        setErrorMsg(error);
      } else {
        localStorage.setItem("token", data.user.token)
        navigate("/");
        setLoggedIn(true);
      }
    };
    setTimeout(() => {
      setErrorMsg([]);
    }, 3000);
    fetchLogin();
  };

  return (
    <form onSubmit={submitLoginHandler} className="space-y-4 md:space-y-6">
      <div>
        {erorMsg.map((er, i) => (
          <div key={i} className="text-red-600">
            {er}
          </div>
        ))}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          value={logEmail}
          onChange={(e) => setLogEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          value={logPassword}
          onChange={(e) => setLogPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-full"
      >
        Enter a account
      </Button>
    </form>
  );
};

export default LoginForm;
