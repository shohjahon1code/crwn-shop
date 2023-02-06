import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Ui/Button";
import { SignupContext } from "../context/signup-context";
import { Input } from "../Ui/Input";

const SignupForm = () => {
  const navigate = useNavigate();
  const {
    email,
    setEamail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    username,
    setUsername,
    erorMsg,
    setErrorMsg,
    setLoggedIn,
  } = useContext(SignupContext);

  const emailChangeHandler = (e) => {
    setEamail(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const submitUserhandler = (e) => {
    e.preventDefault();
    const newUser = {
      user: {
        username,
        email,
        password,
      },
    };
    try {
      const createUser = async () => {
        const res = await fetch(`https://api.realworld.io/api/users/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const data = await res.json();
        if (res.ok) {
          navigate("/");
          setLoggedIn(true);
          localStorage.setItem("token", data.user.token)
          setEamail("");
          setPassword("");
          setUsername("");
          setConfirmPassword("");
        } else {
          const error = Object.keys(data.errors).map((name) => {
            return `${name} ${data.errors[name].join(",")}`;
          });
          setErrorMsg(error);
        }
      };
      setTimeout(() => {
        setErrorMsg([]);
      }, 5000);

      createUser();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={submitUserhandler}
      className="space-y-4 md:space-y-6"
      action="#"
    >
      <div>
        {erorMsg.map((er) => (
          <div className="text-red-600">{er}</div>
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
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          value={email}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <Input
          type="text"
          name="username"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          value={username}
          onChange={usernameChangeHandler}
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
          value={password}
          onChange={passwordChangeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm password
        </label>
        <Input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <Input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor="terms"
            className="font-light text-gray-500 dark:text-gray-300"
          >
            I accept the{" "}
            <a
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
            >
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <Button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-full"
      >
        Create an account
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <a
          href="#"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login here
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
