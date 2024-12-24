import "../index.css";
import Navbar from "../components/navbar";
import TextField from "../components/textfield";
import React from "react";
import messageIcon from "../assets/messageIcon.svg";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

function forgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if(email){
      navigate("/forgotPassword2")
    }
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
        <h3 className="text-h3-bold font-bold text-center">Olvidé mi contraseña</h3>
        <div className="space-y-10">
          <TextField
            label="Correo Electrónico"
            placeholder="abc@gmail.com"
            value={email}
            icon={<img src={messageIcon} alt="user icon" />}
            onChange={handleEmailChange}
          />
          <div className="space-y-5">
            <Button type="solid" button="secondary" onClick={onClick}>
              Reestablecer Contraseña
            </Button>

            <p className="text-black-600 text-p-2 text-center">
              Ingresa a tu correo electrónico para obtener instrucciones
              de cómo recuperar tu contraseña
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default forgotPassword;
