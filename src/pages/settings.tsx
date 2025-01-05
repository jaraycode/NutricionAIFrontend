import React from "react";
import Navbar2 from "../components/navbar2";
import Sidebar from "../components/sidebar";
import TextField from "../components/textfield";
import Button from "../components/button";
import PasswordTextField from "../components/passwordTextField";
import userIcon from "../assets/userIcon.svg";
import messageIcon from "../assets/messageIcon.svg";
import { useNavigation } from "../NavigationContext";

function Settings() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [dailyCalories, setDailyCalories] = React.useState("");
  const [dailyProteins, setDailyProteins] = React.useState("");
  const [dailyFats, setDailyFats] = React.useState("");

  const { navigateTo } = useNavigation();

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

  const handleDailyCaloriesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dailyCalories = event.target.value;
    setDailyCalories(dailyCalories);
  };

  const handleDailyProteinsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dailyProteins = event.target.value;
    setDailyProteins(dailyProteins);
  };

  const handleDailyFatsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const dailyFats = event.target.value;
    setDailyFats(dailyFats);
  };

  function onClickSave(e: React.MouseEvent<HTMLButtonElement>) {
    if (
      name &&
      email &&
      password &&
      dailyCalories &&
      dailyProteins &&
      dailyFats
    ) {
      alert("Datos guardados correctamente");
    }
  }

  function onClickDelete(e: React.MouseEvent<HTMLButtonElement>) {
    const confirmed = window.confirm(
      "¿Estás seguro de que deseas borrar tu cuenta?"
    );
    if (confirmed) {
      alert("Cuenta eliminada correctamente");
      navigateTo("logout");
    }
  }

  return (
    <div>
      <Navbar2 />
      <div className="flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5 mt-[4.125rem] bg-black-100 min-h-screen flex items-center justify-center">
          <div className="bg-white shadow-md rounded-[25px] p-6 w-full max-w-2xl border border-gray-300 max-h-1036">
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

                <TextField
                  label="Meta de calorías diaria (kcal)"
                  placeholder="0.00"
                  value={dailyCalories}
                  infoMessage="Calcula tu tasa metabólica basal en la siguiente página y toma una decisión en base a tus necesidades."
                  infoLinkURL="https://es.calcuworld.com/salud/metabolismo-basal/"
                  onChange={handleDailyCaloriesChange}
                />
                <TextField
                  label="Meta de proteínas diaria (g)"
                  placeholder="0"
                  value={dailyProteins}
                  infoMessage="La Organización Mundial de la Salud (OMS) recomienda consumir al menos 0,8 gramos de proteína por kilogramo de peso corporal al día. Pero puedes modificarlo en base a tus requerimientos. "
                  onChange={handleDailyProteinsChange}
                />
                <TextField
                  label="Meta de grasas diaria (g)"
                  placeholder="0"
                  infoMessage="La Organización Mundial de la Salud (OMS) recomienda que el consumo de grasas no supere el 30% de las calorías totales diarias."
                  value={dailyFats}
                  onChange={handleDailyFatsChange}
                />

                <div className="space-y-5">
                  <Button type="solid" button="secondary" onClick={onClickSave}>
                    Guardar
                  </Button>

                  <Button type="solid" button="error" onClick={onClickDelete}>
                    Borrar Cuenta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
