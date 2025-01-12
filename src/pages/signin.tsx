import React from "react";
import { useNavigate } from "react-router-dom";
import messageIcon from "../assets/messageIcon.svg";
import userIcon from "../assets/userIcon.svg";
import Button from "../components/button";
import Navbar from "../components/navbar";
import PasswordTextField from "../components/passwordTextField";
import TextField from "../components/textfield";
import "../index.css";
// import envs from "../lib/config";

function Signin() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [caloriesPerDay, setCaloriesPerDay] = React.useState(0);
  const [fatPerDay, setFatPerDay] = React.useState(0);
  const [proteinPerDay, setProteinPerDay] = React.useState(0);

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

  const handleCaloriesPerDayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const calories = event.target.value;
    setCaloriesPerDay(Number(calories));
  };

  const handleFatPerDayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fat = event.target.value;
    setFatPerDay(Number(fat));
  };

  const handleProteinPerDayChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const protein = event.target.value;
    setProteinPerDay(Number(protein));
  };

  const handleRegister = async (
    email: string,
    password: string,
    name: string,
    caloriesPerDay: number,
    fatPerDay: number,
    proteinPerDay: number
  ) => {
    try {
      const formData = {
        name,
        email,
        password,
        role: "USER",
        config: { caloriesPerDay, fatPerDay, proteinPerDay },
      };
      // const link: string = envs.baseURL as string;
      const link: string = "http://127.0.0.1:8888";
      const response = await fetch(`${link}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  function onClick() {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      caloriesPerDay &&
      proteinPerDay &&
      fatPerDay
    ) {
      if (password === confirmPassword) {
        const registerData = handleRegister(
          email,
          password,
          name,
          caloriesPerDay,
          fatPerDay,
          proteinPerDay
        );
        localStorage.setItem("user", JSON.stringify(registerData));
        navigate("/dashboard");
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
          <TextField
            label="Meta de Calorias Diarias"
            placeholder="abc@gmail.com"
            value={caloriesPerDay.toString()}
            icon={<img src={messageIcon} alt="user icon" />}
            onChange={handleCaloriesPerDayChange}
          />
          <TextField
            label="Meta de Grasas Diarias"
            placeholder="abc@gmail.com"
            value={fatPerDay.toString()}
            icon={<img src={messageIcon} alt="user icon" />}
            onChange={handleFatPerDayChange}
          />
          <TextField
            label="Meta de Proteinas Diarias"
            placeholder="abc@gmail.com"
            value={proteinPerDay.toString()}
            icon={<img src={messageIcon} alt="user icon" />}
            onChange={handleProteinPerDayChange}
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
