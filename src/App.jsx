import React, { useState } from "react";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div
          className={`absolute inset-0 transition-transform duration-700 transform ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Login setIsLogin={setIsLogin} />
        </div>
        <div
          className={`absolute inset-0 transition-transform duration-700 transform ${
            isLogin ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          <Register setIsLogin={setIsLogin} />
        </div>
      </div>
    </div>
  );
}

export default App;
