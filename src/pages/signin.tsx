import "../index.css";
import Navbar from "../components/navbar";
import TextField from "../components/textfield";
import React from "react";
import messageIcon from "../assets/messageIcon.svg";
import PasswordTextField from "../components/passwordTextField";
import Button from "../components/button";
import userIcon from "../assets/userIcon.svg";
import { useNavigate } from "react-router-dom";
// Store the environment variable in a constant
const apiUrl = import.meta.env.VITE_API_URL;

function Signin() {
  console.log(apiUrl);
  const navigate = useNavigate();

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

const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await fetch(`${apiUrl}/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });

          if (response.ok) {
            const message = await response.text();
            console.log(message); // Log the plain text message
            localStorage.setItem("user", JSON.stringify({ email }));
            navigate("/dashboard");
          } else {
            console.error("Registration failed");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
    }
  };


  return (
    <>
      <div
        style={{
          height: "982px",
          backgroundImage:
            "url(src/assets/navbarBackground.svg), url(src/assets/food_image.svg)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top, right",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar showButtons={false} />
      </div>

      <div
        className="space-y-10"
        style={{
          marginTop: "10.75rem",
          marginLeft: "6.32rem",
          zIndex: 2,
          position: "absolute",
          top: "0",
          left: "0",
          width: "24.43rem",
        }}
      >
        <h3 className="text-h3-bold font-bold text-center">Registrarse</h3>
        <div className="space-y-10">
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

          <PasswordTextField
            label="Confirmar Contraseña"
            placeholder="clave1234"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          <div className="space-y-5">
            <Button type="solid" button="secondary" onClick={onClick}>
              Registrarse
            </Button>

            <p className="text-black-600 text-p-2 text-center">
              ¿Ya tienes una cuenta?{" "}
              <a className="text-primary-darkGreen" href="/login">
                Iniciar Sesión
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
