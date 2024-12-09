import React from "react";
import logo from "../assets/logo.svg";

const Navbar2: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-secondary-lightGreen h-[4.125rem] flex items-center z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8 ml-[-2.2rem]">
          <img src={logo} alt="logo" className="h-5 w-21" />
        </div>
        <div className="flex space-x-5 ml-auto">
          <a
            href="/"
            className="text-p1-regular font-regular text-black-300 hover:text-primary-darkGreen"
          >
            Inicio
          </a>
          <a
            href="/FAQs"
            className="text-p1-regular font-regular text-black-300 hover:text-primary-darkGreen"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="/dashboard"
            className="text-p1-regular font-regular text-black-300 hover:text-primary-darkGreen"
          >
            Perfil
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;