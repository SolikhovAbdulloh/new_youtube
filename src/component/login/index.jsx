import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("Bajarildi", "true"); 
      navigate("/dashboard"); 
    } else {
      alert("Noto'g'ri login yoki parol!");
    }
  };

  return (
    <div className="flex justify-center gap-6 items-center h-screen">
      <div className="flex justify-center items-center gap-5 flex-col">
        <label className="flex gap-4">
          Login
          <input
            className="w-100px h-[30px] p-4 bg-[#24899f]"
            type="text"
            placeholder="Admin"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="flex gap-4">
          Parol
          <input
            className="w-100px h-[30px] p-4 bg-[#24899f]"
            type="password"
            placeholder="1234"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          className="bg-blue-400 w-[100px] h-[40px] rounded-xl justify-center flex items-center"
          onClick={Login}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Login;
