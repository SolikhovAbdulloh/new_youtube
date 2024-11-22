import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { dashboard_links } from "../utils";

function Dashboard() {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <div className="w-[20%] p-4 h-screen bg-grey flex flex-col gap-4">
          <h1 className="text-black text-xl font-bold mb-4">Dashboard</h1>
          {dashboard_links.map((value) => (
            <div
              key={value.id}
              onClick={() => navigateTo(value.path)}
              className="cursor-pointer hover:bg-[grey] p-2 rounded"
            >
              <button className="text-black">{value.title}</button>
            </div>
          ))}
        </div>

        <div className="flex-grow p-6 bg-gray-100">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
            <div className="w-full max-w-md"></div>
          </header>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
