import "../index.css";
import Navbar from "../components/navbar";
import React from "react";
import PasswordTextField from "../components/passwordTextField";
import Button from "../components/button";

function forgotPassword2() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");



  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setConfirmPassword(password);
  };

  function onClick(e: React.MouseEvent<HTMLButtonElement>) {
    if(password && confirmPassword){
        if(password=== confirmPassword){
            console.log("a")
        }
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
        <h3 className="text-h3-bold font-bold text-center">
          Ingresa la nueva contraseña
        </h3>
        <div className="space-y-10">
          <PasswordTextField
            label="Nueva Contraseña"
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
        </div>
        <Button type="solid" button="secondary" onClick={onClick}>
          Confirmar
        </Button>
      </div>
    </>
  );
}

export default forgotPassword2;
