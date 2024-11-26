import React from "react";
import PropTypes from "prop-types";

function Register({ setIsLogin }) {
  return (
    <div className="p-8 w-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        S'inscrire
      </h2>
      <form className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border bg-gray-700 border-gray-600 rounded-md p-2.5 text-gray-300"
            placeholder="example@domain.com"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-400"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border bg-gray-700 border-gray-600 rounded-md p-2.5 text-gray-300"
            placeholder="********"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-400"
          >
            Confirmez le mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border bg-gray-700 border-gray-600 rounded-md p-2.5 text-gray-300"
            placeholder="********"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            type="submit"
            className="w-full px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          >
            S'inscrire
          </button>
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-gray-200"
            onClick={() => setIsLogin(true)}
          >
            Se connecter
          </a>
        </div>
      </form>
    </div>
  );
}

Register.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default Register;
