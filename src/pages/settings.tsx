import React from "react";
import Navbar2 from "../components/navbar2";
import Sidebar from "../components/sidebar";

function Settings() {
  return (
    <>
      <Navbar2 />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-[4.125rem] bg-black-100 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow-md rounded-[25px] p-6 w-full max-w-2xl border border-gray-300">
            <h3 className="text-h3-bold font-bold text-primary-darkGreen mb-4 text-center">
              Configuración
            </h3>

          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
