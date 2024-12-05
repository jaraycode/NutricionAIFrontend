import "../index.css";
import Navbar from "../components/navbar";
import TextField from "../components/textfield";
import React from "react";
import messageIcon from "../assets/messageIcon.svg";
import PasswordTextField from "../components/passwordTextField";
import Button from "../components/button";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("Button clicked");
  }

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
        <h3 className="text-h3-bold font-bold text-center">Iniciar Sesión</h3>
        <div className="space-y-10">
          <TextField
            label="Correo Electrónico"
            placeholder="abc@gmail.com"
            value={email}
            icon={<img src={messageIcon} alt="user icon" />}
            onChange={handleEmailChange}
          />
          <div>
            <PasswordTextField
              label="Contraseña"
              placeholder="clave1234"
              value={password}
              onChange={handlePasswordChange}
            />
            <div style={{ textAlign: "right" }}>
              <p>
                <a
                  href="/forgotPassword"
                  className="text-p4-regular text-primary-darkGreen"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-5">
            <Button type="solid" button="secondary" onClick={onClick}>
              Iniciar sesión
            </Button>

            <p className="text-black-600 text-p-2 text-center">
              ¿No tienes una cuenta?{" "}
              <a className="text-primary-darkGreen" href="/signin">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
