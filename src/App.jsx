import React, { useState } from "react";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-full max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          {
            isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />
          }
      </div>
    </div>
  );
}

export default App;
