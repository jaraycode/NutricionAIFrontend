import React from "react";
import Navbar2 from "../components/navbar2";
import Sidebar from "../components/sidebar";
import TextField from "../components/textfield";
import Button from "../components/button";
import PasswordTextField from "../components/passwordTextField";
import userIcon from "../assets/userIcon.svg";
import messageIcon from "../assets/messageIcon.svg";

function Settings() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = event.target.value;
    setConfirmPassword(password);
  };

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (name && email && password && confirmPassword) {
    }
  }

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
            <div className="flex flex-col items-center">
              <div className="space-y-10 w-3/4">
                <TextField
                  label="Nombre"
                  placeholder="ABC"
                  value={name}
                  icon={<img src={userIcon} alt="user icon" />}
                  onChange={handleNameChange}
                />
                <TextField
                  label="Correo Electrónico"
                  placeholder="abc@gmail.com"
                  value={email}
                  icon={<img src={messageIcon} alt="user icon" />}
                  onChange={handleEmailChange}
                />
                <PasswordTextField
                  label="Contraseña"
                  placeholder="clave1234"
                  value={password}
                  onChange={handlePasswordChange}
                />

                <div className="space-y-5">
                  <Button type="solid" button="secondary" onClick={onClick}>
                    Guardar
                  </Button>

                  <Button type="solid" button="secondary" onClick={onClick}>
                    Borrar Cuenta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
